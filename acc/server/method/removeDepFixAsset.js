Meteor.methods({
    removeDepFixAsset: function (id) {
        Acc.Collection.FixAssetDep.remove({journalId: id});
        Acc.Collection.DepExpList.remove({journalId: id});
    }
})