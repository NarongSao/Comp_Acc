/**
 * Chart Account
 */
Meteor.publish('accMapNBCBalanceKH', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.MapNBCBalanceKH.find();
    }
});
