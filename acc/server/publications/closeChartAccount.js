/**
 * Close Chart Account
 */
Meteor.publish('accCloseChartAccount', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.CloseChartAccount.find();
    }
});
