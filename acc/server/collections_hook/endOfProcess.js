// Customer
var module = 'Acc';

Acc.Collection.DateEndOfProcess.before.insert(function (userId, doc) {

    var date = moment(new Date()).format("YYMM");
    var prefix = doc.branchId + "-" + date;
    doc._id = idGenerator.genWithPrefix(Acc.Collection.DateEndOfProcess, prefix, 6);

    //Insert NetIncome To Collection NetIncome
    //
    var year = moment(doc.closeDate).format("YYYY");

    var exchangeData = Cpanel.Collection.Exchange.findOne({}, {sort: {exDate: -1}});
    var selectorNetIncome = {};
    selectorNetIncome.branchId = doc.branchId;
    selectorNetIncome.currencyId = "All";
    // exChangeDate ==exChangeDateId
    selectorNetIncome.exchangeDate = exchangeData._id;
    selectorNetIncome.date = moment(doc.closeDate).format("YYYY-MM") + "-01 To " + moment(doc.closeDate).format("YYYY-MM-DD");

    var data = Meteor.call("acc_profitLostForAll", selectorNetIncome);
    var selector = {};
    selector.date = doc.closeDate;
    selector.riel = math.round(data.profitR,2);
    selector.baht = math.round(data.profitB,2);
    selector.dollar = math.round(data.profitUSD,2);
    selector.endId = doc._id;
    selector.year = year;
    selector.branchId=doc.branchId;

    Acc.Collection.NetInCome.insert(selector);

    // month is december must convert Net Income to Retain Earning
    if (moment(doc.closeDate).format("MM") == 12) {
        var netIncomeThisYear = Acc.Collection.NetInCome.find({year: year});
        var riel = 0;
        var dollar = 0;
        var baht = 0;
        netIncomeThisYear.forEach(function (obj) {
            riel += obj.riel;
            dollar += obj.dollar;
            baht += obj.baht;
        })

        var  rielDr= riel > 0 ? 0 : math.round(riel,2 )* (-1);
        var  rielCr= riel > 0 ? math.round(riel,2 ) : 0;

        var  dollarDr= dollar > 0 ? 0 : math.round(dollar,2) * (-1);
        var  dollarCr= dollar > 0 ? math.round(dollar,2)  : 0;

        var  bahtDr= baht > 0 ? 0 : math.round(baht,2) * (-1);
        var  bahtCr= baht > 0 ? math.round(baht,2) : 0;

        var accountDet = Acc.Collection.MapClosing.findOne({chartAccountCompare: "Retain Earning"});


        //Dollar
        var journalInsertNetIncomeDollar = {};
        journalInsertNetIncomeDollar.journalDate = moment((parseInt(year) + 1) + "-01-01", "YYYY-MM-DD").toDate();
        journalInsertNetIncomeDollar.currencyId = "USD";
        journalInsertNetIncomeDollar.voucherId = doc.branchId + (parseInt(year) + 1) + "000001";
        journalInsertNetIncomeDollar.memo = "Convert Net Income to Retain Earning in Dollar";
        journalInsertNetIncomeDollar.branchId = doc.branchId;
        journalInsertNetIncomeDollar.total = dollar;
        journalInsertNetIncomeDollar.endId = doc._id;

        var transactionDollar = [];
        transactionDollar.push({
            account: accountDet.accountDoc.code + " | " + accountDet.accountDoc.name + " | Equity",
            dr: dollarDr,
            cr: dollarCr,
            drcr:dollarDr-dollarCr
        });
        journalInsertNetIncomeDollar.transaction = transactionDollar;
        Acc.Collection.Journal.insert(journalInsertNetIncomeDollar);


        //Riel
        var journalInsertNetIncomeRiel = {};
        journalInsertNetIncomeRiel.journalDate = moment((parseInt(year) + 1) + "-01-01", "YYYY-MM-DD").toDate();
        journalInsertNetIncomeRiel.currencyId = "KHR";
        journalInsertNetIncomeRiel.voucherId = doc.branchId + (parseInt(year) + 1) + "000002";
        journalInsertNetIncomeRiel.memo = "Convert Net Income to Retain Earning in Riel";
        journalInsertNetIncomeRiel.branchId = doc.branchId;
        journalInsertNetIncomeRiel.total = riel;
        journalInsertNetIncomeRiel.endId = doc._id;

        var transactionRiel = [];
        transactionRiel.push({
            account: accountDet.accountDoc.code + " | " + accountDet.accountDoc.name + " | Equity",
            dr: rielDr,
            cr: rielCr,
            drcr: rielDr- rielCr
        });
        journalInsertNetIncomeRiel.transaction = transactionRiel;
        Acc.Collection.Journal.insert(journalInsertNetIncomeRiel);

        //Riel
        var journalInsertNetIncomeBaht = {};
        journalInsertNetIncomeBaht.journalDate = moment((parseInt(year) + 1) + "-01-01", "YYYY-MM-DD").toDate();
        journalInsertNetIncomeBaht.currencyId = "THB";
        journalInsertNetIncomeBaht.voucherId = doc.branchId + (parseInt(year) + 1) + "000003";
        journalInsertNetIncomeBaht.memo = "Convert Net Income to Retain Earning in Riel";
        journalInsertNetIncomeBaht.branchId = doc.branchId;
        journalInsertNetIncomeBaht.total = baht;
        journalInsertNetIncomeBaht.endId = doc._id;

        var transactionBaht = [];
        transactionBaht.push({
            account: accountDet.accountDoc.code + " | " + accountDet.accountDoc.name + " | Equity",
            dr: bahtDr,
            cr: bahtCr,
            drcr: bahtDr-bahtCr
        });
        journalInsertNetIncomeBaht.transaction = transactionBaht;
        Acc.Collection.Journal.insert(journalInsertNetIncomeBaht);

    }

});

Acc.Collection.CloseChartAccount.before.insert(function (userId, doc) {

    var date = moment(new Date()).format("YYMM");
    var prefix = doc.branchId + "-" + date;
    doc._id = idGenerator.genWithPrefix(Acc.Collection.CloseChartAccount, prefix, 6);

});

