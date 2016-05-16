var dateEndOfProcessTpl = Template.acc_dateEndOfProcess,
    dateEndOfProcessInsertTpl = Template.acc_dateEndOfProcessInsert;
dateEndOfProcessTpl.onRendered(function () {
    createNewAlertify("endOfProcess");
    // SEO
    SEO.set({
        title: 'End Of Process',
        description: 'Description for this page'
    });
})


dateEndOfProcessInsertTpl.onRendered(function () {
    datePicker();
    var cur = moment().format("YYYY-MM-DD");
    $("#dateEndOfProcess").val(cur);
    disableDate();
})

var datePicker = function () {
    var dob = $('[name="closeDate"]');
    DateTimePicker.date(dob);
};


dateEndOfProcessTpl.events({
    'click .endOfProcess': function (e, t) {
        alertify.endOfProcess(fa("plus", "End Of Process"), renderTemplate(
            dateEndOfProcessInsertTpl));
    },


    'click .remove': function (e, t) {
        var id = this._id;
        var lastEnd = Acc.Collection.DateEndOfProcess.findOne({}, {
            sort: {
                closeDate: -1
            }
        });
        var cur = Acc.Collection.DateEndOfProcess.findOne({
            _id: id
        });

            if (lastEnd.closeDate == cur.closeDate) {
                alertify.confirm("Are you sure to delete ?")
                    .set({
                        onok: function (closeEvent) {
                            Meteor.call('removeEndOfProcess', id);
                        },
                        title: fa("remove", "End of Process")
                    });
            } else {
                alertify.error(
                    "You can't delete. This is not the last End Of Process!!!");
            }
        }
});

dateEndOfProcessInsertTpl.events({
    'click .save': function (e, t) {
        var dateSelect = $("#dateEndOfProcess").val();
        $("#dateEndOfProcess").val("");
        var currMonth = moment(dateSelect).format("MM");

        var selectorGetLastDate = {};
        var branchId = Session.get("currentBranch");
        selectorGetLastDate.branchId = branchId;
        var lastDate = Acc.Collection.CloseChartAccount.findOne(
            selectorGetLastDate, {
                sort: {
                    closeDate: -1
                }
            });

        if (lastDate != null) {
            if (lastDate.closeDate < dateSelect) {

                var branchId = Session.get("currentBranch");
                var selectorGetLastBalance = {};
                var selectorGetLastDate = {};
                var selector = {};
                //Get Last Date Closing
                if (dateSelect != null) {
                    selectorGetLastDate.closeDate = {
                        $lte: dateSelect
                    };
                }

                selectorGetLastDate.branchId = branchId;
                var lastDate = Acc.Collection.CloseChartAccount.findOne(
                    selectorGetLastDate, {
                        sort: {
                            closeDate: -1
                        }
                    });

                //Parameter for Balance Last End Of Process
                if (lastDate != null) {
                    selectorGetLastBalance.closeDate = lastDate.closeDate;
                }
                selectorGetLastBalance.branchId = branchId;

                //Parameter End Process
                if (currMonth=="12") {
                    selector['transaction.accountDoc.accountTypeId'] = {
                        $gte: "01",
                        $lte: "39"
                    };
                }
                selector.branchId = branchId;
                if (lastDate != null) {
                    selector.journalDate = {
                        $gte: moment(lastDate.closeDate,"YYYY-MM-DD").add(1,'days').toDate(),
                        $lt: moment(dateSelect,"YYYY-MM-DD").add(1,'days').toDate()
                    }
                } else {
                    selector.journalDate = {
                        $lt: moment(dateSelect,"YYYY-MM-DD").add(1,'days').toDate()
                    }
                }

                Meteor.call('getEndOfProcess', selector, branchId,
                    selectorGetLastBalance, lastDate, dateSelect,
                    function (error, result) {
                        if (!error) {
                            alertify.success(result);
                            alertify.endOfProcess().close();
                        } else {
                            alertify.error(error.message);
                        }
                    });
                /*         },
                 null
                 )*/
            } else {
                alertify.warning("You already End of Process!!!");
            }
        } else {

            var branchId = Session.get("currentBranch");
            var selectorGetLastBalance = {};
            var selectorGetLastDate = {};
            var selector = {};
            //Get Last Date Closing
            if (dateSelect != null) {
                selectorGetLastDate.closeDate = {
                    $lte: moment(dateSelect).format("YYYY-MM-DD")
                };
            }
            selectorGetLastDate.branchId = branchId;
            var lastDate = Acc.Collection.CloseChartAccount.findOne(
                selectorGetLastDate, {
                    sort: {
                        closeDate: -1
                    }
                });

            //Parameter for Balance Last End Of Process
            if (lastDate != null) {
                selectorGetLastBalance.closeDate = lastDate.closeDate;
            }
            selectorGetLastBalance.branchId = branchId;

            //Parameter End Process
            if (currMonth=="12") {
                selector['transaction.accountDoc.accountTypeId'] = {
                    $gte: "01",
                    $lte: "39"
                };
            }

            selector.branchId = branchId;
            if (lastDate != null) {
                selector.journalDate = {
                    $gte: moment(lastDate.closeDate,"YYYY-MM-DD").add(1,'days').toDate(),
                    $lt: moment(dateSelect,"YYYY-MM-DD").add(1,'days').toDate()
                }
            } else {
                selector.journalDate = {
                    $lt: moment(dateSelect,"YYYY-MM-DD").add(1,'days').toDate()
                }
            }


            Meteor.call('getEndOfProcess', selector, branchId,
                selectorGetLastBalance, lastDate, dateSelect,
                function (error, result) {
                    if (!error) {
                        alertify.success(result);
                        alertify.endOfProcess().close();
                    } else {
                        alertify.error(error.message);
                    }
                });
        }

    },
    'click .reset': function (e, t) {
        $("#dateEndOfProcess").val('');
    }
})


var disableDate = function () {
    var selectorGetLastDate = {};
    var branchId = Session.get("currentBranch");
    selectorGetLastDate.branchId = branchId;

    var dateVal = Acc.Collection.DateEndOfProcess.findOne(selectorGetLastDate, {
        sort: {
            closeDate: -1
        }
    });
    var mindate = moment(dateVal.closeDate).add(1, "days").toDate();
    $(".dateEndOfProcess").data('DateTimePicker').minDate(mindate);
}
