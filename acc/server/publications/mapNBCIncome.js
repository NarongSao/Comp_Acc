/**
 * Chart Account
 */
Meteor.publish('accMapNBCIncome', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.MapNBCIncome.find();
    }
});
