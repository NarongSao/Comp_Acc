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

        Acc.Collection.FixAssetExpense.remove(id);
    },
    fixAssetExpense: function (selector) {
        var depType=Acc.Collection.ConfigDep.findOne();
        var selectorList = {};
        selectorList.date = {$lte: moment(selector.date, "YYYY-MM-DD").add(-1, 'months').toDate()};
        selectorList.isDep = false;
        selectorList.branchId = selector.branchId;
        var depList = Acc.Collection.DepExpList.find(selectorList).fetch();

        if (depList.length != 0) {
            var selectorExpense = {};
            selectorExpense.date = moment(selector.date, "YYYY-MM-DD").toDate();
            selectorExpense.branchId = selector.branchId;
            var selectorExpenseList = [];


            depList.forEach(function (obj) {

                obj.transactionAsset.sort(compareASD);

                //Insert into FixAssetExpense
                var selectorExpenseObj = {};
                selectorExpense.journalId = obj.journalId;

                selectorExpenseObj.account = obj.account;
                selectorExpenseObj.buyDate = obj.date;
                selectorExpenseObj.currencyId = obj.currencyId;

                selectorExpenseObj.depExpListId = obj._id;

                for (let ob of obj.transactionAsset) {
                    if (ob.status == false) {
                        selectorExpenseObj.value = depType.depPerTime*ob.perMonth;
                        break;
                    }
                }
                selectorExpenseList.push(selectorExpenseObj);


                //Update DepExpList
                var transactionUpdate = [];
                var i = 1;
                obj.transactionAsset.forEach(function (ob) {
                    if (i == 1 && ob.status == false) {
                        ob.month += depType.depPerTime;
                        i++;

                        if (ob.month == 12 && obj.life == ob.year) {
                            obj.isDep = true;
                        }
                    }
                    if (ob.month == 12) {
                        ob.status = true;
                    }
                    transactionUpdate.push(ob);
                })
                obj.transactionAsset = transactionUpdate;
                Acc.Collection.DepExpList.update({_id: obj._id}, {$set: obj});
            })

            selectorExpense.transactionExpense = selectorExpenseList;
          return Acc.Collection.FixAssetExpense.insert(selectorExpense);

        }
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


