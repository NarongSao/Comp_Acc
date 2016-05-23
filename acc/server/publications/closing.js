/**
 * Date End Of Process
 */
Meteor.publish('accClosing', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.Closing.find();
    }
});

