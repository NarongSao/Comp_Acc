var fixAssetExpenseTpl = Template.acc_fixAssetExpense,
    fixAssetExpenseInsertTpl = Template.acc_fixAssetExpenseInsert;
fixAssetExpenseTpl.onRendered(function () {
    createNewAlertify("depreciationExpense");
    // SEO
    SEO.set({
        title: 'Depreciation Expense',
        description: 'Description for this page'
    });
})

fixAssetExpenseTpl.helpers({
    selector: function () {
        return {branchId: Session.get("currentBranch")};
    }
})
fixAssetExpenseInsertTpl.onRendered(function () {
    datePicker();
    var cur = moment().format("YYYY-MM-DD");
    $('[name="date"]').val(cur);
    disableDate();
})

var datePicker = function () {
    var dob = $('[name="date"]');
    DateTimePicker.date(dob);
};


fixAssetExpenseTpl.events({
    'click .depreciationExpense': function (e, t) {
        alertify.depreciationExpense(fa("plus", "Depreciation Expense"), renderTemplate(
            fixAssetExpenseInsertTpl));
    },
    'click .remove': function (e, t) {
        var id = this._id;
        alertify.confirm(
            fa("remove", "Fix Asset Expense"),
            "Are you sure to delete [" + id + "]?",
            function () {

                Meteor.call("removeFixAssetExpense",id,function (error) {
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

fixAssetExpenseInsertTpl.events({
    'click .reset': function (e, t) {
        $("#dateEndOfProcess").val('');
    }
})

/**
 * Hook
 */
AutoForm.hooks({
    acc_fixAssetExpenseInsert: {
        before: {
            insert: function (doc) {
                doc.branchId=Session.get("currentBranch");
                return doc;
            }
        },
        onSuccess: function(formType, result) {
            event.preventDefault();
            alertify.depreciationExpense().close();
            alertify.success("Success");
        },
        onError: function(formType, error) {
            alertify.error(error.message);
        }
    }
});


var disableDate = function () {
    var selectorGetLastDate = {};
    var branchId = Session.get("currentBranch");
    selectorGetLastDate.branchId = branchId;

    var dateVal = Acc.Collection.FixAssetExpense.findOne(selectorGetLastDate, {
        sort: {
            date: -1
        }
    });
    var mindate = moment(dateVal.date).add(1, "days").toDate();
    $("#date").data('DateTimePicker').minDate(mindate);
}
