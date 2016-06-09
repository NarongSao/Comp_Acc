var indexTpl = Template.acc_configDep,
  updateTpl = Template.acc_configDepUpdate;

/**
 * Index
 */

indexTpl.onRendered(function() {
  /* Create new alertify */
  createNewAlertify("configDep");
  // SEO
  SEO.set({
    title: 'Config Depreciation',
    description: 'Description for this page'
  });
});

indexTpl.events({

  'click .update': function(e, t) {
    alertify.configDep(fa("pencil", "Dep Rank"),renderTemplate(updateTpl, this));
  },
});


/**
 * Hook
 */
AutoForm.hooks({
  acc_configDepUpdate: {
    onSuccess: function(formType, result) {
      alertify.configDep().close();
      alertify.success('Success');
    },
    onError: function(formType, error) {
      alertify.error(error.message);
    }
  }
});
