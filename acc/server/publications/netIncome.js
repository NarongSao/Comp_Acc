/**
 * Date End Of Process
 */
Meteor.publish('acc_netIncome', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.NetInCome.find();
    }
});

