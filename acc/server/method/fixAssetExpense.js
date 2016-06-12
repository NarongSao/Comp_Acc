Meteor.methods({
    removeFixAssetExpense: function (id) {
        var depType=Acc.Collection.ConfigDep.findOne();
        var depList = Acc.Collection.DepExpList.find({isDep: false}).fetch();
        if (depList.length != 0) {
            depList.forEach(function (obj) {
                //Update DepExpList
                var transactionUpdate = [];
                var i = 1;

                obj.transactionAsset.sort(compare);
                obj.transactionAsset.forEach(function (ob) {
                    if (i == 1 && ob.month > 0) {
                        ob.month -= depType.depPerTime;
                        i++;

                        if (ob.month < 12) {
                            obj.isDep = false;
                        }
                    }
                    if (ob.month < 12) {
                        ob.status = false;
                    }
                    transactionUpdate.push(ob);
                })
                transactionUpdate.sort(compareASD);
                obj.transactionAsset = transactionUpdate;
                Acc.Collection.DepExpList.update({_id: obj._id}, {$set: obj});
            })
        }

        Acc.Collection.Journal.remove({fixAssetExpenseId: id});
        Acc.Collection.FixAssetExpense.remove(id);
    }
})

function compare(a, b) {
    if (a.year < b.year) {
        return 1;
    } else if (a.year > b.year) {
        return -1;
    } else {
        return 0;
    }
}
function compareASD(a, b) {
    if (a.year < b.year) {
        return -1;
    } else if (a.year > b.year) {
        return 1;
    } else {
        return 0;
    }
}


