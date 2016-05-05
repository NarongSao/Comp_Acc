// Customer
var module = 'Acc';

Acc.Collection.DateEndOfProcess.before.insert(function (userId, doc) {

    var date = moment(new Date()).format("YYMM");
    var prefix = doc.branchId + "-" + date;
    doc._id = idGenerator.genWithPrefix(Acc.Collection.DateEndOfProcess, prefix, 6);

});

Acc.Collection.CloseChartAccount.before.insert(function (userId, doc) {

    var date = moment(new Date()).format("YYMM");
    var prefix = doc.branchId + "-" + date;
    doc._id = idGenerator.genWithPrefix(Acc.Collection.CloseChartAccount, prefix, 6);

});

