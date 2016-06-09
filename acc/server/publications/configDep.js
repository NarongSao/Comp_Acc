/**
 * Date End Of Process
 */
Meteor.publish('accConfigDep', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.ConfigDep.find();
    }
});

