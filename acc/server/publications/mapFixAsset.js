/**
 * Chart Account
 */
Meteor.publish('accMapFixAsset', function() {
  if (this.userId) {
    this.unblock();
    return Acc.Collection.MapFixAsset.find();
  }
});
