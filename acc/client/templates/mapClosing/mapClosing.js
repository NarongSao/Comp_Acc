var indexTpl = Template.acc_mapClosing,
  updateTpl = Template.acc_mapClosingUpdate;

/**
 * Index
 */

indexTpl.onRendered(function() {
  /* Create new alertify */
  createNewAlertify("mapClosing");
  // SEO
  SEO.set({
    title: 'Map Closing',
    description: 'Description for this page'
  });
});

indexTpl.events({

  'click .update': function(e, t) {
    var data = Acc.Collection.MapClosing.findOne(this._id);
    alertify.mapClosing(fa("pencil", "Map Closing"),renderTemplate(updateTpl, data));
  },
});


updateTpl.events({
  'submit .preventDef': function(evt) {
    evt.preventDefault();
  }
});


/**
 * Hook
 */
AutoForm.hooks({
  acc_mapClosingUpdate: {
    onSuccess: function(formType, result) {
      alertify.mapClosing().close();
      alertify.success('Success');
    },
    onError: function(formType, error) {
      alertify.error(error.message);
    }
  }
});
