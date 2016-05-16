Meteor.methods({
    removeCollectionsBeforeRestore: function (collections, query) {
        _.each(collections, function (col) {
            Mongo.Collection.get(col).direct.remove(query, function (error) {
                if (error) {
                    return false;
                }
            });
        });

        return true;
    }
});
