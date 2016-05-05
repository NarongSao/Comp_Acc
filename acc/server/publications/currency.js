/**
 * Currency
 */
Meteor.publish('accCurrency', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.Currency.find();
    }
});
