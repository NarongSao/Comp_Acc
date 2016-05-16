/**
 * Currency
 */
Meteor.publish('acc_exchangeNBC', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.ExchangeNBC.find();
    }
});
