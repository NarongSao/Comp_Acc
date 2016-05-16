/**
 * journal Setting
 */
Meteor.publish('accJournalSetting', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.JournalSetting.find();
    }
});
