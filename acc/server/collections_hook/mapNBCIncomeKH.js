// Customer
var module = 'Acc';

Acc.Collection.MapNBCIncomeKH.before.insert(function (userId, doc) {

        var transaction = [];
        _.each(doc.transaction, function (obj) {
            if (!_.isNull(obj)) {
                var accountId= obj.account.split('|');
                var account= Acc.Collection.ChartAccount.findOne({code: accountId[0].replace(/\s+/g, '')},{fields:{name: 1,accountTypeId:1,code:1,level:1,parentId: 1}});
                obj.accountDoc = account;
                transaction.push(obj);
            }
        });
        doc.transaction = transaction;

    var accountNBC=Acc.Collection.ChartAccountNBCKH.findOne({_id: doc.chartAccountNBCId});

    doc.accountDocNBC=accountNBC;

});
Acc.Collection.MapNBCIncomeKH.before.update(function (userId, doc, fieldNames, modifier, options) {
        modifier.$set = modifier.$set || {};
        var transaction = [];
        _.each(modifier.$set.transaction, function (obj) {
            if (!_.isNull(obj)) {
                var accountId= obj.account.split('|');

                var account= Acc.Collection.ChartAccount.findOne({code: accountId[0].replace(/\s+/g, '')},{fields:{name: 1,accountTypeId:1,code:1,level:1,parentId: 1}});
                obj.accountDoc = account;
                transaction.push(obj);
            }
        });
    modifier.$set.transaction = transaction;
    var accountNBC=Acc.Collection.ChartAccountNBCKH.findOne({_id: modifier.$set.chartAccountNBCId});
    modifier.$set.accountDocNBC=accountNBC;


});
