Meteor.methods({
  getBalanceSheet: function(selector, baseCurrency, exchangeDate,
    selectorGetLastBalance, lastDate) {
    var arr = [];
    var results = Acc.Collection.Journal.aggregate([{
        $unwind: "$transaction"
      }, {
        $match: selector
      }, {
        $group: {
          _id: {
            account: "$transaction.accountDoc._id",
            code: "$transaction.accountDoc.code",
            name: "$transaction.accountDoc.name",
            accountTypeId: "$transaction.accountDoc.accountTypeId",
            level: "$transaction.accountDoc.level",
            parent: "$transaction.accountDoc.parentId",
            currency: "$currencyId"
          },
          result: {
            $sum: "$transaction.drcr"
          }
        }
      },

      {
        $sort: {
          "_id.code": 1
        }
      }
    ]);
    results.forEach(function(obj) {
      var re = Meteor.call('exchange', obj._id.currency, baseCurrency,
        obj.result, exchangeDate);
      arr.push({
        account: obj._id.account,
        name: obj._id.name,
        result: re,
        value: obj.result,
        code: obj._id.code,
        accountTypeId: obj._id.accountTypeId,
        level: obj._id.level,
        parent: obj._id.parent,
        currency: obj._id.currency
      });
    });

    if (lastDate != null) {
      var resultLast = Acc.Collection.CloseChartAccount.find(
        selectorGetLastBalance);
      if (resultLast != null) {
        resultLast.forEach(function(lastBal) {
          var re = Meteor.call('exchange', lastBal.currencyId,
            baseCurrency, lastBal.value, exchangeDate);
          arr.push({
            account: lastBal.closeChartAccountId,
            name: lastBal.name,
            result: re,
            value:lastBal.value,
            code: lastBal.code,
            accountTypeId: lastBal.accountTypeId,
            level: lastBal.level,
            parent: lastBal.parentId,
            currency: lastBal.currencyId
          });
        })
      }
    }

    arr.sort(compare);
    return arr;
  },
  getBalanceSheetNBC: function(selector, baseCurrency, exchangeDate,
    selectorGetLastBalance, lastDate) {
    var arr = [];
    var results = Acc.Collection.Journal.aggregate([{
        $unwind: "$transaction"
      }, {
        $match: selector
      }, {
        $group: {
          _id: {
            account: "$transaction.accountDoc._id",
            code: "$transaction.accountDoc.code",
            name: "$transaction.accountDoc.name",
            accountTypeId: "$transaction.accountDoc.accountTypeId",
            level: "$transaction.accountDoc.level",
            parent: "$transaction.accountDoc.parentId",
            currency: "$currencyId"
          },
          result: {
            $sum: "$transaction.drcr"
          }
        }
      },

      {
        $sort: {
          "_id.code": 1
        }
      }
    ]);
    results.forEach(function(obj) {
      var re = Meteor.call('exchangeNBC', obj._id.currency,
        baseCurrency, obj.result, exchangeDate);
      arr.push({
        account: obj._id.account,
        name: obj._id.name,
        result: re,
        code: obj._id.code,
        accountTypeId: obj._id.accountTypeId,
        level: obj._id.level,
        parent: obj._id.parent,
        currency: obj._id.currency
      });
    });


    if (lastDate != null) {
      var resultLast = Acc.Collection.CloseChartAccount.find(
        selectorGetLastBalance);
      if (resultLast != null) {
        resultLast.forEach(function(lastBal) {
          var re = Meteor.call('exchangeNBC', lastBal.currencyId,
            baseCurrency, lastBal.value, exchangeDate);


          arr.push({
            account: lastBal.closeChartAccountId,
            name: lastBal.name,
            result: re,
            code: lastBal.code,
            accountTypeId: lastBal.accountTypeId,
            level: lastBal.level,
            parent: lastBal.parentId,
            currency: lastBal.currencyId
          });
        })
      }
    }

    arr.sort(compare);
    return arr;
  }

});

function compare(a, b) {
  if (a.code < b.code) {
    return -1;
  } else if (a.code > b.code) {
    return 1;
  } else {
    return 0;
  }
}
