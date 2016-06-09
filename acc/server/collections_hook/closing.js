// Customer
var module = 'Acc';

Acc.Collection.Closing.before.insert(function (userId, doc) {

    var date = moment(doc.dateFrom).format("YYMM");
    var prefix = doc.branchId + "-" + date;
    doc._id = idGenerator.genWithPrefix(Acc.Collection.Closing, prefix, 6);

});

