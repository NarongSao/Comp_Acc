/**
 * Chart Account
 */
Meteor.publish('accMapNBCIncomeKH', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.MapNBCIncomeKH.find();
    }
});
