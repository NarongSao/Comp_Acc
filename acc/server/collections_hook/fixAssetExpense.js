// Customer
var module = 'Acc';

Acc.Collection.FixAssetExpense.before.insert(function (userId, doc) {

    var date = moment(doc.date).format("YYMM");
    var prefix = doc.branchId + "-" + date;
    doc._id = idGenerator.genWithPrefix(Acc.Collection.FixAssetExpense, prefix, 6);


    var depType = Acc.Collection.ConfigDep.findOne();
    var selectorList = {};
    selectorList.date = {$lte: moment(doc.date).add(-1, 'months')._d};
    selectorList.isDep = false;
    selectorList.branchId = doc.branchId;
    var depList = Acc.Collection.DepExpList.find(selectorList).fetch();
    var startYear = new Date(doc.date).getFullYear();
    var startDate = new Date(startYear + '-' + '01-01');

    if (depList.length != 0) {
        doc.date = doc.date;
        doc.branchId = doc.branchId;
        var selectorExpenseList = [];
        Acc.Collection.DepExpList.update({isDep: true}, {$inc: {increment: 1}}, {multi: true});

        depList.forEach(function (obj) {

            obj.transactionAsset.sort(compareASD);

            //Insert into FixAssetExpense
            var selectorExpenseObj = {};
            selectorExpenseObj.journalId = obj.journalId;
            selectorExpenseObj.account = obj.account;
            selectorExpenseObj.buyDate = obj.date;
            selectorExpenseObj.currencyId = obj.currencyId;

            selectorExpenseObj.depExpListId = obj._id;

            for (let ob of obj.transactionAsset) {
                if (ob.status == false) {
                    var depTime = ob.maxMonth < depType.depPerTime ? ob.maxMonth : depType.depPerTime;
                    var depValue = numeral(depTime * ob.perMonth).format('0,0.00');
                    selectorExpenseObj.value = numeral().unformat(depValue);
                    break;
                }
            }
            selectorExpenseList.push(selectorExpenseObj);


            //Insert Into Journal
            var selectorJournal = {};
            selectorJournal.journalDate = doc.date;
            selectorJournal.currencyId = obj.currencyId;
            selectorJournal.memo = "Depreciation Expense " + moment(doc.date).format("DD/MM/YYYY");

            var year = moment(doc.date).format("YYYY");

            /*var voucher = Meteor.call('getVoucherId', obj.currencyId,startDate);
             if (voucher != null) {
             var lastVoucherId = doc.branchId + "-" + year + s.pad(parseInt(
             (voucher.voucherId).substr(8, 13)) + 1, 6, "0");
             } else {
             lastVoucherId = doc.branchId + "-" + year + "000001";
             }*/

            // selectorJournal.voucherId = lastVoucherId == undefined ? doc.branchId + "-" + year + "000001" : lastVoucherId;
            selectorJournal.voucherId = "000000";
            selectorJournal.branchId = doc.branchId;
            selectorJournal.total = selectorExpenseObj.value;
            selectorJournal.fixAssetExpenseId = doc._id;

            var accountMap = Acc.Collection.MapFixAsset.findOne({fixAssetCon: obj.account});

            var accountTypeAccu = Acc.Collection.AccountType.findOne(accountMap.accuFixAssetDoc.accountTypeId);
            var accountTypeDepre = Acc.Collection.AccountType.findOne(accountMap.fixAssetExpenseDoc.accountTypeId);

            if (accountTypeAccu && accountTypeDepre) {
                var transaction = [];
                transaction.push({
                    account: accountMap.fixAssetExpenseDoc.code + " | " + accountMap.fixAssetExpenseDoc.name + " | " + accountTypeDepre.name,
                    dr: selectorExpenseObj.value,
                    cr: 0,
                    drcr: selectorExpenseObj.value
                }, {
                    account: accountMap.accuFixAssetDoc.code + " | " + accountMap.accuFixAssetDoc.name + " | " + accountTypeAccu.name,
                    dr: 0,
                    cr: selectorExpenseObj.value,
                    drcr: (-1) * selectorExpenseObj.value
                });
                selectorJournal.transaction = transaction;
                Acc.Collection.Journal.insert(selectorJournal);


                //Update DepExpList

                var transactionUpdate = [];
                var i = 1;
                var yearLength = obj.transactionAsset.length;
                obj.transactionAsset.forEach(function (ob) {
                    if (i == 1 && ob.status == false) {
                        var depTime = ob.maxMonth < depType.depPerTime ? ob.maxMonth : depType.depPerTime;
                        ob.month += depTime;
                        i++;

                        if (ob.month == ob.maxMonth && yearLength == ob.year) {
                            obj.isDep = true;
                        }
                    }
                    if (ob.month == ob.maxMonth) {
                        ob.status = true;
                    }
                    transactionUpdate.push(ob);
                })
                obj.transactionAsset = transactionUpdate;
                Acc.Collection.DepExpList.update({_id: obj._id}, {$set: obj});
            }
        })
        doc.transactionExpense = selectorExpenseList;
    }

});


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


