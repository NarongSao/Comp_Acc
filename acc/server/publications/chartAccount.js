/**
 * Chart Account
 */
Meteor.publish('accChartAccount', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.ChartAccount.find();
    }
});
