// Customer
var module = 'Acc';

Acc.Collection.NetInCome.before.insert(function (userId, doc) {

    var date = moment(doc.date).format("YYMM");
    var prefix = doc.branchId + "-" + date;
    doc._id = idGenerator.genWithPrefix(Acc.Collection.NetInCome, prefix, 6);

});

