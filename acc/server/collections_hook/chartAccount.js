// Customer
var module = 'Acc';

Acc.Collection.ChartAccount.before.insert(function (userId, doc) {
    Meteor.call('checkParent', doc.parentId, function (err, checkParent) {
        if (err) {
        } else {
            if (checkParent != null) {
                //generate add zero
                doc.code = s.pad(doc.code, 5, "0");
                /*  doc.name = checkParent.name + " : " + doc.name;*/
                doc.level = checkParent.level + 1;
            } else {
                doc.code = s.pad(doc.code, 5, "0");
                doc.level = 0;
            }
        }
    });
    doc._id = idGenerator.gen(Acc.Collection.ChartAccount, 3);
});

Acc.Collection.ChartAccount.before.update(function (userId, doc, fieldNames, modifier, options) {
    Meteor.call('checkParent', modifier.$set.parentId, function (err, checkParent) {
        if (err) {
        } else {
            if (checkParent != null) {
                //generate add zero
                modifier.$set.code = s.pad(modifier.$set.code, 5, "0");
                /*  doc.name = checkParent.name + " : " + doc.name;*/
                modifier.$set.level = checkParent.level + 1;
            } else {
                modifier.$set.code = s.pad(modifier.$set.code, 5, "0");
                modifier.$set.level = 0;
            }
        }
    });

});



