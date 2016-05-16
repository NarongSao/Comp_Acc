/**
 * Exchange
 */
var module = 'Acc';

Acc.Collection.ExchangeNBC.after.insert(function (userId, doc) {
    Events.trackInsert({
        description: doc,
        module: module
    });
});

Acc.Collection.ExchangeNBC.after.update(function (userId, doc, fieldNames, modifier, options) {
    Events.trackUpdate({
        description: modifier,
        module: module
    });
});

Acc.Collection.ExchangeNBC.after.remove(function (userId, doc) {
    Events.trackRemove({
        description: doc,
        module: module
    });
});