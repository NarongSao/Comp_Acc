/**
 * Chart Account
 */
Meteor.publish('accMapNBCBalance', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.MapNBCBalance.find();
    }
});
