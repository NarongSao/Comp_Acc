/**
 * Chart Account
 */
Meteor.publish('accChartAccountNBC', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.ChartAccountNBC.find();
    }
});
