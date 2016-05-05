/**
 * Account Type
 */
Meteor.publish('accAccountType', function () {
    if (this.userId) {
        this.unblock();
        return Acc.Collection.AccountType.find();
    }
});
