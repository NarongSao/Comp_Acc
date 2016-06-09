// Customer
var module = 'Acc';

Acc.Collection.FixAssetExpense.before.insert(function (userId, doc) {

    var date = moment(doc.date).format("YYMM");
    var prefix = doc.branchId + "-" + date;
    doc._id = idGenerator.genWithPrefix(Acc.Collection.FixAssetExpense, prefix, 6);

});

