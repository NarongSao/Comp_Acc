Meteor.methods({
    acc_fixAssetDepList: function (params) {
        var data = {
            title: {},
            header: {},
            content: [{
                index: 'No Result'
            }],
            footer: {}
        };


        /****** Title *****/
        data.title = Cpanel.Collection.Company.findOne();

        /****** Header *****/
        data.header = params;
        /****** Content *****/

        var self = params;
        var selector = {};
        var content="";

        selector.journalId = self.journalId;
        selector.branchId = self.branchId;
        var depList = Acc.Collection.DepExpList.find(selector).fetch();

        if (depList.length != 0) {
            depList.forEach(function (obj) {
                var cumDeprec = 0;
                var bvEndYear = obj.amount;
                content+="<tr style='background-color: #e5e5e5'><td colspan='6'>"+obj.account+" : "+obj.amount+getCurrenySymbol(obj.currencyId)+"</td></tr>";
                obj.transactionAsset.forEach(function (ob) {
                    cumDeprec += ob.perYear;
                    bvEndYear -= ob.perYear;
                    content+="<tr><td>"+ob.year+"</td><td>"+ob.perMonth+"</td><td>"+ob.perYear+"</td><td>"+numeral().unformat(numeral(cumDeprec).format('0,0.00'))+"</td><td>"+numeral().unformat(numeral(bvEndYear).format('0,0.00'))+"</td><td>"+ob.month+"</td></tr>";
                })
            })
        }
        data.content = content;
        return data;
    },

    acc_fixAssetDepSummaryList: function (params) {
        var data = {
            title: {},
            header: {},
            content: [{
                index: 'No Result'
            }],
            footer: {}
        };


        /****** Title *****/
        data.title = Cpanel.Collection.Company.findOne();

        /****** Header *****/
        data.header = params;
        /****** Content *****/

        var self = params;
        var selector = {};
        var content="";


        selector.branchId = self.branchId;
        selector.isDep=false;
        var depList = Acc.Collection.DepExpList.find(selector).fetch();
        var depConfig=Acc.Collection.ConfigDep.findOne({});

            var accountShow="";
        if (depList.length != 0) {
            depList.sort(compareASD);
            var i;
            depList.forEach(function (obj) {


                var cumDeprec = 0;
                var monthDep=0;
                var depExp=0;

                obj.transactionAsset.forEach(function (ob) {

                    var depMonth= ob.maxMonth < depConfig.depPerTime ? ob.maxMonth: depConfig.depPerTime ;
                    if(ob.month!=0){
                        monthDep+=ob.month;
                        cumDeprec += ob.month* ob.perMonth;
                        depExp = depMonth* ob.perMonth;
                    }
                })
                var currency=getCurrenySymbol(obj.currencyId);
                if(accountShow!=obj.account){
                    i=1;
                    content+="<tr style='background-color: lightgrey'><td colspan='10' style='border-bottom: none'>"+obj.account+"</td></tr>";
                }

                content+="<tr><td>"+i+"</td><td>"+obj.code+"</td><td>"+obj.description+"</td><td>"+moment(obj.date).format("DD-MM-YYYY")+"</td><td>"+numeral(obj.amount).format('0,0.00')+currency+"</td><td>"+obj.percent+"</td><td>"+monthDep+"</td><td>"+numeral(depExp).format('0,0.00')+currency+"</td><td>"+numeral(cumDeprec).format('0,0.00')+currency+"</td><td>"+obj.estSalvage+"</td></tr>";
                accountShow=obj.account;
                i++;
            })
        }
        data.content = content;
        return data;
    }
});

var getCurrenySymbol =function (id) {
    return Acc.Collection.Currency.findOne(id).symbol;
}

var compareASD=function (a, b) {
    if (a.account < b.account) {
        return -1;
    } else if (a.account > b.account) {
        return 1;
    } else {
        return 0;
    }
}