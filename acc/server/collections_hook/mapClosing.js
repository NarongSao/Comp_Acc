// Customer
var module = 'Acc';

Acc.Collection.MapClosing.before.update(function(userId, doc, fieldNames,
  modifier, options) {
  modifier.$set = modifier.$set || {};

  var accountDoc = Acc.Collection.ChartAccount.findOne({
    _id: modifier.$set.chartAccount
  });
  modifier.$set.accountDoc = accountDoc;
});
