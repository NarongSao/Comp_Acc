/**
 * Date End Of Process
 */
Meteor.publish('accDateEndOfProcess', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.DateEndOfProcess.find();
    }
});

