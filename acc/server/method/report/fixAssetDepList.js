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

            var accountShow="";
        if (depList.length != 0) {
            depList.sort(compareASD);
            depList.forEach(function (obj) {


                var cumDeprec = 0;
                var remain = obj.amount;
                var monthDep=0;
                obj.transactionAsset.forEach(function (ob) {
                    monthDep+=ob.month;
                    cumDeprec += ob.month* ob.perMonth;
                    remain -= ob.month* ob.perMonth;
                })
                var remainLife=(obj.life*12)-monthDep;
                var currency=getCurrenySymbol(obj.currencyId);

                if(accountShow!=obj.account){
                    var accountHTML="<td style='border-bottom: none'>"+obj.account+"</td>";
                }else{
                    var accountHTML="<td style='border: none'></td>";
                }
                content+="<tr>"+accountHTML+"<td>"+obj.life+"</td><td>"+moment(obj.date).format("DD-MM-YYYY")+"</td><td>"+numeral(obj.amount).format('0,0.00')+currency+"</td><td>"+monthDep+"</td><td>"+numeral(cumDeprec).format('0,0.00')+currency+"</td><td>"+numeral(remain).format('0,0.00')+currency+"</td><td>"+remainLife+"</td></tr>";
                accountShow=obj.account;
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