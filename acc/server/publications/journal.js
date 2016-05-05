/**
 * Journal
 */
Meteor.publish('acc_Journal', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.Journal.find();
    }
});
