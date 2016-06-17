Meteor.methods({
    removeFixAssetExpense: function (id) {
        var depType=Acc.Collection.ConfigDep.findOne();
        Acc.Collection.DepExpList.update({isDep: true}, {$inc: {increment: -1}},{multi: true});
        var depList = Acc.Collection.DepExpList.find({increment: 0}).fetch();

        if (depList.length != 0) {
            depList.forEach(function (obj) {
                //Update DepExpList
                var transactionUpdate = [];
                var i = 1;

                obj.transactionAsset.sort(compare);
                obj.transactionAsset.forEach(function (ob) {
                    if (i == 1 && ob.month > 0) {
                        ob.month -= depType.depPerTime;
                        ob.month= ob.month>0 ? ob.month: 0;
                        i++;

                        if (ob.month < ob.maxMonth) {
                            obj.isDep = false;
                        }
                    }
                    if (ob.month < ob.maxMonth) {
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


