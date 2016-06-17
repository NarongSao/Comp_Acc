/**
 * Date End Of Process
 */
Meteor.publish('accDepFixList', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.DepExpList.find();
    }
});

