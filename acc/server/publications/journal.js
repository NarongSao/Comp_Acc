/**
 * Journal
 */
Meteor.publish('acc_Journal', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.Journal.find();
    }
});
/*
Meteor.publish('acc_JournalById', function (selector = {}, options = {}) {
    if (this.userId) {
        this.unblock();
        check(selector, Object);
        check(options, Object);
        return Acc.Collection.Journal.findOne(selector, options);
    }
});
*/
