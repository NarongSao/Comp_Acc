Meteor.methods({
  exchange: function(curFrom, curTo, amount, id) {
    var ex = Cpanel.Collection.Exchange.findOne({
      base: curTo,
      _id: id
    }, {
      sort: {
        _id: -1
      }
    });
    if (curFrom != curTo) {
      return amount / ex.rates[curFrom];
    } else {
      return amount;
    }
  },
  exchangeNBC: function(curFrom, curTo, amount, id) {
    var ex = Acc.Collection.ExchangeNBC.findOne({
      base: curTo,
      _id: id
    }, {
      sort: {
        _id: -1
      }
    });

    if (curFrom != curTo) {
      var val = ex.rates[curFrom].split('/');
      if (val[1] != null) {
        return amount * parseFloat(val[1]);
      } else {
        return amount / parseFloat(ex.rates[curFrom]);
      }
    } else {
      return amount;
    }
  }
})
