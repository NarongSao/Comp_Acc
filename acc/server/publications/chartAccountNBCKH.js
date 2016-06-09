/**
 * Chart Account
 */
Meteor.publish('accChartAccountNBCKH', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.ChartAccountNBCKH.find();
    }
});
