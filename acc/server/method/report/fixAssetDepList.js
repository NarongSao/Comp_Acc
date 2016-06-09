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
                content+="<tr style='background-color: #e5e5e5'><td colspan='6'>"+obj.account+" : "+obj.amount+obj.currencyId+"</td></tr>";
                obj.transactionAsset.forEach(function (ob) {
                    cumDeprec += ob.perYear;
                    bvEndYear -= ob.perYear;
                    content+="<tr><td>"+ob.year+"</td><td>"+ob.perMonth+"</td><td>"+ob.perYear+"</td><td>"+cumDeprec+"</td><td>"+bvEndYear+"</td><td>"+ob.month+"</td></tr>"
                })
            })
        }
        data.content = content;
        return data;
    }
});
