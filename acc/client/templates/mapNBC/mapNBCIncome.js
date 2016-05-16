var indexTpl = Template.acc_mapNBCIncome,
  insertTpl = Template.acc_mapNBCIncomeInsert,
  updateTpl = Template.acc_mapNBCIncomeUpdate;

/**
 * Index
 */

indexTpl.onRendered(function() {
  /* Create new alertify */
  createNewAlertify("mapIncomeNBC");
  // SEO
  SEO.set({
    title: 'Map Chart Account',
    description: 'Description for this page'
  });
});

indexTpl.events({

  'click .insert': function(e, t) {
    itemsState.clear();

    alertify.mapIncomeNBC(fa("plus", "Map NBC Income"),renderTemplate(insertTpl));
    /*.maximize();*/

  },
  'click .update': function(e, t) {
    itemsState.clear();

    var data = Acc.Collection.MapNBCIncome.findOne(this._id);
    var doc = Acc.Collection.ChartAccountNBC.findOne(data.chartAccountNBCId)
    data.name = doc.code + " | " + doc.name;

    if (!_.isUndefined(data)) {
      _.each(data.transaction, function(journal, index) {
        journal.indexAccount = 'transaction.' + index + '.account';
        itemsState.insert(journal.account, journal);
      });
    }
    alertify.mapIncomeNBC(fa("pencil", "Map NBC Income"),renderTemplate(updateTpl, data));
  },
  'click .remove': function(e, t) {

    var id = this._id;

    alertify.confirm("Are you sure to delete [" + id + "]?")
      .set({
        onok: function(closeEvent) {

          Acc.Collection.MapNBCIncome.remove(id, function(error) {
            if (error) {
              alertify.error(error.message);
            } else {
              alertify.success("Success");
            }
          });
        },
        title: fa("remove", "Map NBC Income")
      });

  }
});

/**
 * Hook
 */
AutoForm.hooks({
  // Customer
  acc_mapNBCIncomeInsert: {
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
  acc_mapNBCIncomeUpdate: {
    onSuccess: function(formType, result) {
      alertify.mapIncomeNBC().close();
      alertify.success('Success');
    },
    onError: function(formType, error) {
      alertify.error(error.message);
    }
  }
});
