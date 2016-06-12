var indexTpl = Template.acc_mapFixAsset,
    insertTpl=Template.acc_mapFixAssetInsert,
  updateTpl = Template.acc_mapFixAssetUpdate;

/**
 * Index
 */

indexTpl.onRendered(function() {
  /* Create new alertify */
  createNewAlertify("mapFixAsset");
  // SEO
  SEO.set({
    title: 'Map FixAsset',
    description: 'Description for this page'
  });
});

indexTpl.events({

  'click .insert': function(e, t) {
    alertify.mapFixAsset(fa("pencil", "Map Closing"),renderTemplate(insertTpl));
  },'click .update': function(e, t) {
    var self=this;
    alertify.mapFixAsset(fa("pencil", "Map Closing"),renderTemplate(updateTpl, self));
  },
  'click .remove': function (e,t) {
    var self=this;
    alertify.confirm(
        fa("remove", "Map FixAsset"),
        "Are you sure to delete [" + self._id + "]?",
        function () {
          Acc.Collection.MapFixAsset.remove(self._id, function (error) {
            if (error) {
              alertify.error(error.message);
            } else {
              alertify.success("Success");
            }
          });
        },
        null
    );
  }
});

/**
 * Hook
 */
AutoForm.hooks({
  acc_mapFixAssetInsert: {
    onSuccess: function(formType, result) {
      alertify.success('Success');
    },
    onError: function(formType, error) {
      alertify.error(error.message);
    }
  },acc_mapFixAssetUpdate: {
    onSuccess: function(formType, result) {
      alertify.mapFixAsset().close();
      alertify.success('Success');
    },
    onError: function(formType, error) {
      alertify.error(error.message);
    }
  }
});
