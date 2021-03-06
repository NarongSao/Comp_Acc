Meteor.methods({
  getProfitLost: function(selector, baseCurrency, exchangeDate) {
    var arr = [];
    var result = Acc.Collection.Journal.aggregate([

      {
        $unwind: "$transaction"
      }, {
        $match: selector
      }, {
        $group: {
          _id: {
            account: "$transaction.accountDoc._id",
            name: "$transaction.accountDoc.name",
            currency: "$currencyId",
            accountType: "$transaction.accountDoc.accountTypeId",
            code: "$transaction.accountDoc.code",
            level: "$transaction.accountDoc.level",
            parent: "$transaction.accountDoc.parentId"
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

    result.forEach(function(obj) {
      var re = Math.abs(Meteor.call('exchange', obj._id.currency,
        baseCurrency, obj.result, exchangeDate));
      arr.push({
        account: obj._id.account,
        name: obj._id.name,
        result: re,
        value: Math.abs(obj.result),
        accountType: obj._id.accountType,
        code: obj._id.code,
        currency: obj._id.currency,
        level: obj._id.level,
        parent: obj._id.parent
      });
    });
    return arr;
  },
  getProfitLostNBC: function(selector, baseCurrency, exchangeDate) {
    var arr = [];
    var result = Acc.Collection.Journal.aggregate([

      {
        $unwind: "$transaction"
      }, {
        $match: selector
      }, {
        $group: {
          _id: {
            account: "$transaction.accountDoc._id",
            name: "$transaction.accountDoc.name",
            currency: "$currencyId",
            accountType: "$transaction.accountDoc.accountTypeId",
            code: "$transaction.accountDoc.code"
          },
          result: {
            $sum: "$transaction.drcr"
          }
        }
      }
    ]);

    result.forEach(function(obj) {
      var re = Math.abs(Meteor.call('exchangeNBC', obj._id.currency,
        baseCurrency, obj.result, exchangeDate));
      arr.push({
        account: obj._id.account,
        name: obj._id.name,
        result: re,
        accountType: obj._id.accountType,
        code: obj._id.code,
        currency: obj._id.currency
      });
    });
    return arr;
  },
  getProfitLostYearToDate: function(selector, baseCurrency, exchangeDate,
    selectorMiddle, selectorEndDate) {
    var arr = [];
    var result = Acc.Collection.Journal.aggregate([

      {
        $unwind: "$transaction"
      }, {
        $match: selector
      }, {
        $group: {
          _id: {
            account: "$transaction.accountDoc._id",
            name: "$transaction.accountDoc.name",
            currency: "$currencyId",
            accountType: "$transaction.accountDoc.accountTypeId",
            code: "$transaction.accountDoc.code",
          level: "$transaction.accountDoc.level",
          parent: "$transaction.accountDoc.parentId"
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

    result.forEach(function(obj) {
      var re = Math.abs(Meteor.call('exchange', obj._id.currency,
        baseCurrency, obj.result, exchangeDate));
      arr.push({
        account: obj._id.account,
        name: obj._id.name,
        result: re,
        value: Math.abs(obj.result),
        accountType: obj._id.accountType,
        code: obj._id.code,
        currency: obj._id.currency,
        thisMonth: true,
        level: obj._id.level,
        parent: obj._id.parent
      });
    });


    // ResultMiddle
    if (selectorMiddle != "") {
      var resultMiddle = Acc.Collection.Journal.aggregate([

        {
          $unwind: "$transaction"
        }, {
          $match: selectorMiddle
        }, {
          $group: {
            _id: {
              account: "$transaction.accountDoc._id",
              name: "$transaction.accountDoc.name",
              currency: "$currencyId",
              accountType: "$transaction.accountDoc.accountTypeId",
              code: "$transaction.accountDoc.code",
              level: "$transaction.accountDoc.level",
              parent: "$transaction.accountDoc.parentId"
            },
            result: {
              $sum: "$transaction.drcr"
            }
          }
        }
      ]);

      resultMiddle.forEach(function(obj) {
        var re = Math.abs(Meteor.call('exchange', obj._id.currency,
          baseCurrency, obj.result, exchangeDate));
        arr.push({
          account: obj._id.account,
          name: obj._id.name,
          result: re,
          value: Math.abs(obj.result),
          accountType: obj._id.accountType,
          code: obj._id.code,
          currency: obj._id.currency,
          thisMonth: false,
          level: obj._id.level,
          parent: obj._id.parent
        });
      });
    }

    // Get from CLose Chart Account
    if (selectorEndDate != "") {
      var resultEnd = Acc.Collection.CloseChartAccount.find(
        selectorEndDate);
      resultEnd.forEach(function(obj) {
        var re = Math.abs(Meteor.call('exchange', obj.currencyId,
          baseCurrency, obj.value, exchangeDate));
        arr.push({
          account: obj.closeChartAccountId,
          name: obj.name,
          result: re,
          value: Math.abs(obj.result),
          accountType: obj.accountTypeId,
          code: obj.code,
          currency: obj.currencyId,
          thisMonth: false,
          level: obj.level,
          parent: obj.parentId
        })
      })
    }
    return arr;
  }

})



