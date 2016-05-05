/**
 * Index
 */

Template.acc_chartAccount.onRendered(function() {
  /* Create new alertify */
  createNewAlertify("chartAccount");
  // SEO
  SEO.set({
    title: 'Chart Account',
    description: 'Description for this page'
  });
});

Template.acc_chartAccount.events({
  'click .insert': function(e, t) {
    alertify.chartAccount(fa("plus", "Chart of Account"),renderTemplate(Template.acc_chartAccountInsert));

    /*.maximize();*/

  },
  'click .update': function(e, t) {

    var selector = {};
    selector._id = this._id;
    Meteor.call('getChartAccount', selector, function(err, data) {
      if (!err) {
        var name = data.name;
        var n = name.split(" : ");
        //var n = s.words(name, " : ");
        data.name = n[n.length - 1];
        alertify.chartAccount(fa("pencil", "Chart of Account"),renderTemplate(Template.acc_chartAccountUpdate,
            data));
      }
    })
  },
  'click .remove': function(e, t) {
    var id = this._id;
    alertify.confirm("Are you sure to delete [" + id + "]?")
      .set({
        onok: function(closeEvent) {

          Acc.Collection.ChartAccount.remove(id, function(error) {
            if (error) {
              alertify.error(error.message);
            } else {
              alertify.success("Success");
            }
          });
        },
        title: fa("remove", "Chart of Account")
      });

  },
  'click .show': function(e, t) {
    alertify.alert(renderTemplate(Template.acc_chartAccountShow, this).html)
      .set({
        title: fa("eye", "Chart of Account")
      });
  }
});
/**
 * Insert
 */
Template.acc_chartAccountInsert.helpers({
  accountTypeOpt: function() {
    if (Session.get('accountTypeId') == null) {
      return Acc.Collection.AccountType.find()
        .map(function(obj) {
          return {
            label: obj._id + " | " + obj.name,
            value: obj._id
          };
        });

    } else {
      var obj = Acc.Collection.AccountType.findOne(Session.get(
        'accountTypeId'));
      return [{
        label: obj._id + " | " + obj.name,
        value: obj._id
      }];
      //return Acc.List.accountType();
    }
  },
  accountTypeValue: function() {
    return Session.get('accountTypeId');
  }
});

Template.acc_chartAccountInsert.events({
  'change #parentId': function() {

    var parent = Acc.Collection.ChartAccount.findOne($('#parentId').val());
    if (parent == null) {
      Session.set('accountTypeId', null);
    } else {
      Session.set('accountTypeId', parent.accountTypeId);
    }

  },
  'submit .preventDef': function(evt, t) {
    evt.preventDefault();
  }
});
/**
 * Update
 */
Template.acc_chartAccountUpdate.helpers({
  accountTypeOpt: function() {
    ///
    if (Session.get('accountTypeId') == null) {
      return Acc.Collection.AccountType.find()
        .map(function(obj) {
          return {
            label: obj._id + " | " + obj.name,
            value: obj._id
          };
        });

    } else {
      var obj = Acc.Collection.AccountType.findOne(Session.get(
        'accountTypeId'));
      return [{
        label: obj._id + " | " + obj.name,
        value: obj._id
      }];
      /*return Acc.List.accountType();*/
    }
  }
});

Template.acc_chartAccountUpdate.events({
  'change #parentId': function() {
    var parent = Acc.Collection.ChartAccount.findOne($('#parentId').val());
    if (parent == null) {
      Session.set('accountTypeId', null);
    } else {
      Session.set('accountTypeId', parent.accountTypeId);
      $('#accountTypeId').val(parent.accountTypeId);
    }

  },
  'submit .preventDef': function(evt) {
    evt.preventDefault();
  }
});
/**
 * Hook
 */
AutoForm.hooks({
  // Customer
  acc_chartAccountInsert: {
    before: {
      insert: function(doc) {
        return doc;
      }
    },
    onSuccess: function(formType, result) {
      alertify.success('Success');
    },
    onError: function(formType, error) {
      alertify.error(error.message);
    },
    after: {
      insert: function() {
        $('#accountTypeId').val('');
      }
    }
  },
  acc_chartAccountUpdate: {
    /* before: {
         update: function (doc) {

             var checkParent = Acc.Collection.ChartAccount.findOne({parentId: doc.$set.parentId});
             if (checkParent != null) {
                 doc.$set.name = checkParent.name + " : " + doc.$set.name;
             }
             return doc;
         }
     },*/
    onSuccess: function(formType, result) {
      alertify.chartAccount().close();
      alertify.success('Success');
    },
    onError: function(formType, error) {
      alertify.error(error.message);
    }
  }
});
