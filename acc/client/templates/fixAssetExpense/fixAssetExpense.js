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
    $("#dateExpense").val(cur);
    disableDate();
})

var datePicker = function () {
    var dob = $('[name="dateExpense"]');
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
    'click .save': function (e, t) {
        var dateSelect = $("[name='dateExpense']").val();
        $("[name='dateExpense']").val("");
        var selector={};
        selector.branchId=Session.get("currentBranch");
        selector.date=dateSelect;
        Meteor.call('fixAssetExpense',selector,function (err,result) {
            if(result){
                alertify.success("Success");
            }else{
                alertify.warning("fixed asset can't depreciation!!!");
            }

        });


    },
    'click .reset': function (e, t) {
        $("#dateEndOfProcess").val('');
    }
})

/**
 * Hook
 */
AutoForm.hooks({
    fixAssetExpenseInsertTpl: {
        onSuccess: function(formType, result) {
            alertify.depreciationExpense().close();
        }
    }
});