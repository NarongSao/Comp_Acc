/**
 * Date End Of Process
 */
Meteor.publish('accFixAssetExpense', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.FixAssetExpense.find();
    }
});

