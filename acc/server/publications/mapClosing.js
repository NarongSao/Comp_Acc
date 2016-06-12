/**
 * Chart Account
 */
Meteor.publish('accMapClosing', function() {
  if (this.userId) {
    this.unblock();
    return Acc.Collection.MapClosing.find();
  }
});
