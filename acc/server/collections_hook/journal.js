// Customer
var module = 'Acc';

Acc.Collection.Journal.before.insert(function (userId, doc) {

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


    var lenArray=doc.transaction.length;
    var date = moment(doc.journalDate).format("YYMM");
    var prefix = doc.branchId + "-" + date;
    doc._id = idGenerator.genWithPrefix(Acc.Collection.Journal, prefix, 6);
    doc.splitAccount =lenArray > 2 ? doc._id : 0;








});
Acc.Collection.Journal.before.update(function (userId, doc, fieldNames, modifier, options) {
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


});
