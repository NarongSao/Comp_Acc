var indexTpl = Template.acc_mapNBCBalance,
  insertTpl = Template.acc_mapNBCBalanceInsert,
  updateTpl = Template.acc_mapNBCBalanceUpdate;

/**
 * Index
 */

indexTpl.onRendered(function() {
  /* Create new alertify */
  createNewAlertify("mapBalanceNBC");
  // SEO
  SEO.set({
    title: 'Map Chart Account',
    description: 'Description for this page'
  });
});


indexTpl.events({

  'click .insert': function(e, t) {

    itemsState.clear();

    alertify.mapBalanceNBC(fa("plus", "Map NBC Balance"),renderTemplate(insertTpl));
    /*.maximize();*/

  },
  'click .update': function(e, t) {
    itemsState.clear();
    var data = Acc.Collection.MapNBCBalance.findOne(this._id);
    var doc = Acc.Collection.ChartAccountNBC.findOne(data.chartAccountNBCId)
    data.name = doc.code + " | " + doc.name;
    if (!_.isUndefined(data)) {
      _.each(data.transaction, function(journal, index) {
        journal.indexAccount = 'transaction.' + index + '.account';
        itemsState.insert(journal.account, journal);
      });
    }
    alertify.mapBalanceNBC(fa("pencil", "Map NBC Balance"),renderTemplate(updateTpl, data));

  },
  'click .remove': function(e, t) {

    var id = this._id;

    alertify.confirm("Are you sure to delete [" + id + "]?")
      .set({
        onok: function(closeEvent) {

          Acc.Collection.MapNBCBalance.remove(id, function(error) {
            if (error) {
              alertify.error(error.message);
            } else {
              alertify.success("Success");
            }
          });
        },
        title: fa("remove", "Map NBC Balance")
      });

  }
});

/**
 * Hook
 */
AutoForm.hooks({
  // Customer
  acc_mapNBCBalanceInsert: {
    before: {
      insert: function(doc) {
        doc.branchId = Session.get("currentBranch");
        return doc;
      }
    },
    onSuccess: function(formType, result) {
      alertify.success('Success');
      itemsState.clear();
    },
    onError: function(formType, error) {
      alertify.error(error.message);
    }
  },
  acc_mapNBCBalanceUpdate: {
    onSuccess: function(formType, result) {
      alertify.mapBalanceNBC().close();
      alertify.success('Success');
    },
    onError: function(formType, error) {
      alertify.error(error.message);
    }
  }
});
