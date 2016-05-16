var indexTpl = Template.acc_journal;
var insertTpl = Template.acc_journalInsert;
var updateTpl = Template.acc_journalUpdate;
/*var transactionTpl = Template.transaction;*/
var showTpl = Template.acc_journalShow;


/*var customArray = Template.afArrayField_customArray;*/
indexTpl.onCreated(function () {
    // SEO
    SEO.set({
        title: 'Journal',
        description: 'Description for this page'
    });

    createNewAlertify(['journal']);
});
// Config date picker
var datePicker = function () {
    var dob = $('[name="journalDate"]');
    DateTimePicker.date(dob);
};

insertTpl.onRendered(function () {
        datePicker();
        disableDate();
});
updateTpl.onRendered(function () {
    var id = FlowRouter.getParam('journalId');
        datePicker();
        disableDateUpdate(id);
        $('#currencyId').select2();
});

insertTpl.helpers({
    voucherId: function () {
        var currentCurrency = Session.get('currencyId');
        var dobSelect= Session.get('dobSelect');
        if(dobSelect==""){
            dobSelect= moment().format("YYYY-MM-DD");
        }
        var startYear = new Date(dobSelect).getFullYear();
        var startDate = new Date(startYear + '-' + '01-01');

        var data = ReactiveMethod.call('getVoucherId', currentCurrency,startDate);
        if (data != null) {
            var lastVoucherId = parseInt((data.voucherId).substr(8, 13)) + 1;
        } else {
            lastVoucherId = "000001";
        }
        return lastVoucherId;
    }
});


updateTpl.helpers({
    journals: function () {
        var journalId = FlowRouter.getParam("journalId");
        var selector = {};
        selector._id = journalId;
        var data = ReactiveMethod.call('getJournal', selector);

        if (data) {
            data.journalDate = moment(data.journalDate).format("YYYY-MM-DD");
            data.voucherId = data.voucherId.substr(8, 13);
            return data;
        }
    }
});


indexTpl.events({
    'click .insert': function (e, t) {
        itemsState.clear();
    },
    'dblclick tbody > tr': function (event) {
        itemsState.clear();
        var dataTable = $(event.target).closest('table').DataTable();
        var rowData = dataTable.row(event.currentTarget).data();


        var selectorGetLastDate = {};
        var branchId = Session.get("currentBranch");
        selectorGetLastDate.branchId = branchId;

        var selector = {};
        selector._id = rowData._id;
        Meteor.call('getDateEndOfProcess', selectorGetLastDate, function (err, lastDate) {
            Meteor.call('getJournal', selector, function (err, data) {
                if (data) {
                    if (lastDate != null) {
                        if (new Date(lastDate.closeDate) < data.journalDate) {
                            if (!_.isUndefined(data)) {

                                _.each(data.transaction, function (journal, index) {
                                    journal.indexAccount = 'transaction.' + index + '.account';
                                    journal.indexDr = 'transaction.' + index + '.dr';
                                    journal.indexCr = 'transaction.' + index + '.cr';

                                    journal.dr = formatNumberToSeperate(journal.dr);
                                    journal.cr = formatNumberToSeperate(journal.cr);

                                    itemsState.insert(journal.account, journal);
                                });
                            }
                            FlowRouter.go('/acc/journalUpdate/' + data._id);

                        } else {
                            alertify.error("Can not update, you already end of process!!!");
                        }

                    } else {
                        if (!_.isUndefined(data)) {
                            _.each(data.transaction, function (journal, index) {
                                journal.indexAccount = 'transaction.' + index + '.account';
                                journal.indexDr = 'transaction.' + index + '.dr';
                                journal.indexCr = 'transaction.' + index + '.cr';

                                journal.dr = formatNumberToSeperate(journal.dr);
                                journal.cr = formatNumberToSeperate(journal.cr);

                                itemsState.insert(journal.account, journal);
                            });
                        }
                        FlowRouter.go('/acc/journalUpdate/' + data._id);
                    }
                }
            });
        });


    }, 'click .update': function (e, t) {
        itemsState.clear();
        var selectorGetLastDate = {};
        var branchId = Session.get("currentBranch");
        selectorGetLastDate.branchId = branchId;

        var selector = {};
        selector._id = this._id;
        Meteor.call('getDateEndOfProcess', selectorGetLastDate, function (err, lastDate) {
            Meteor.call('getJournal', selector, function (err, data) {
                if (data) {
                    if (lastDate != null) {
                        if (new Date(lastDate.closeDate) < data.journalDate) {
                            if (!_.isUndefined(data)) {
                                _.each(data.transaction, function (journal, index) {
                                    journal.indexAccount = 'transaction.' + index + '.account';
                                    journal.indexDr = 'transaction.' + index + '.dr';
                                    journal.indexCr = 'transaction.' + index + '.cr';

                                    journal.dr = formatNumberToSeperate(journal.dr);
                                    journal.cr = formatNumberToSeperate(journal.cr);

                                    itemsState.insert(journal.account, journal);
                                });
                            }
                            FlowRouter.go('/acc/journalUpdate/' + data._id);

                        } else {
                            alertify.error("Can not update, you already end of process!!!");
                        }

                    } else {
                        if (!_.isUndefined(data)) {
                            _.each(data.transaction, function (journal, index) {
                                journal.indexAccount = 'transaction.' + index + '.account';
                                journal.indexDr = 'transaction.' + index + '.dr';
                                journal.indexCr = 'transaction.' + index + '.cr';

                                journal.dr = formatNumberToSeperate(journal.dr);
                                journal.cr = formatNumberToSeperate(journal.cr);

                                itemsState.insert(journal.account, journal);
                            });
                        }
                        FlowRouter.go('/acc/journalUpdate/' + data._id);
                    }
                }
            });
        });


    },
    'click .remove': function (e, t) {
        var self = this;
        var selectorGetLastDate = {};
        var branchId = Session.get("currentBranch");
        selectorGetLastDate.branchId = branchId;
        var selector = {};
        selector._id = this._id;
        Meteor.call('getDateEndOfProcess', selectorGetLastDate, function (err, lastDate) {
            Meteor.call('getJournal', selector, function (err, data) {
                if (data) {
                    if (lastDate != null) {
                        if (new Date(lastDate.closeDate) < data.journalDate) {

                            alertify.confirm(
                                fa("remove", "Order"),
                                "Are you sure to delete [" + self._id + "]?",
                                function () {
                                    Acc.Collection.Journal.remove(self._id, function (error) {
                                        if (error) {
                                            alertify.error(error.message);
                                        } else {
                                            alertify.success("Success");
                                        }
                                    });
                                },
                                null
                            );
                        } else {
                            alertify.error("Can not Remove, you already end of process!!!");
                        }
                    } else {
                        alertify.confirm(
                            fa("remove", "Order"),
                            "Are you sure to delete [" + self._id + "]?",
                            function () {
                                Acc.Collection.Journal.remove(self._id, function (error) {
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
                }
            })
        })
    },
    'click .show': function (e, t) {
        var selector = {};
        selector._id = this._id;
        Meteor.call('getJournal', selector, function (err, data) {

            alertify.journal(fa("eye", "Journal"),renderTemplate(showTpl, data).html);

            /*alertify.alert(renderTemplate(showTpl, data).html)
                .set({
                    title: fa("eye", "Journal")
                })*/
        })
    }
});

insertTpl.events({
    'keypress .transaction-dr,.transaction-cr,#voucherId': function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ($(evt.currentTarget).val().indexOf('.') != -1) {
            if (charCode == 46) {
                return false;
            }
        }
        return !(charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57));
    },
    'change #currencyId': function (e, t) {
        var currencyId = $(e.currentTarget).val();
        Session.set('currencyId', currencyId);
    },
    'blur #journalDate': function (e,t) {
        var curDate = $(e.currentTarget).val();
        Session.set('dobSelect', curDate);
    }
});
updateTpl.events({
    'keypress .transaction-dr,.transaction-cr,#voucherId': function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ($(evt.currentTarget).val().indexOf('.') != -1) {
            if (charCode == 46) {
                return false;
            }
        }
        return !(charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57));
    }
});

AutoForm.hooks({
    acc_journalInsert: {
        before: {
            insert: function (doc) {
                var currentBranch = Session.get("currentBranch");
                doc.branchId = Session.get("currentBranch");
                doc.transaction.forEach(function (obj) {
                    obj.drcr = formatToNumber(obj.dr) - formatToNumber(obj.cr);
                    obj.dr = formatToNumber(obj.dr);
                    obj.cr = formatToNumber(obj.cr);
                });
                var year = moment(journalDate).format("YYYY");
                doc.voucherId = currentBranch + "-" + year + s.pad($('[name="voucherId"]').val(), 6, "0");
                doc.total = formatToNumber($('#total-debit').val());
                return doc;
            }
        },
        onSuccess: function (formType, result) {
            FlowRouter.go('/acc/journal');
            alertify.success("Success");
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    },
    acc_journalUpdate: {
        before: {
            update: function (doc) {
                doc.$set.transaction.forEach(function (obj) {
                    obj.drcr = formatToNumber(obj.dr) - formatToNumber(obj.cr);
                    obj.dr = formatToNumber(obj.dr);
                    obj.cr = formatToNumber(obj.cr);
                });
                doc.$set.splitAccount = doc.$set.transaction.length > 2 ? this.docId : 0;
                if ($('#total-debit').val() != "") {
                    doc.$set.total = formatToNumber($('#total-debit').val());
                }
                var year = moment(journalDate).format("YYYY");
                var currentBranch = Session.get("currentBranch");
                doc.$set.voucherId = currentBranch + "-" + year + s.pad($('[name="voucherId"]').val(), 6, "0");
                return doc;
            }
        },
        onSuccess: function (formType, result) {
            FlowRouter.go('/acc/journal');
            alertify.success("Success");
        },
        onError: function (formTupe, error) {
            alertify.error(error.message);
        }
    }
});

var formatNumberToSeperate = function (val) {
        val = val.toString();
        var parts = (val.replace(/,/g, "")).toString().split(".");
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] == "" || parts[1] != null ? "." + parts[1] : "");
    }, formatToNumber = function (val) {
        var regex = /^\d+(\.\d{1,2})?$/i;
        if (!regex.test(val)) {
            val = val.replace(/,/g, "");
        }
        return parseFloat(val);
    },
    disableDate = function () {
        var selectorGetLastDate = {};
        var branchId = Session.get("currentBranch");
        selectorGetLastDate.branchId = branchId;

        Meteor.call('getDateEndOfProcess', selectorGetLastDate, function (err, lastDate) {
            if (lastDate != null) {
                var dateVal = moment(lastDate.closeDate).add(1, "days").format('YYYY-MM-DD HH:mm');
                $("#journalDate").data('DateTimePicker').minDate(dateVal);
            }
        })

    },
    disableDateUpdate = function (id) {
        var selectorGetLastDate = {};
        var selectorGetLastDateStart = {};
        var branchId = Session.get("currentBranch");
        selectorGetLastDate.branchId = branchId;
        var selector = {};
        selector._id = id;
        Meteor.call('getJournal', selector, function (err, data) {
            if (data) {
                selectorGetLastDate.closeDate = {$gt: data.journalDate};
                Meteor.call('getDateEndOfProcess', selectorGetLastDate, function (err, lastDate) {
                    selectorGetLastDateStart.branchId = branchId;
                    if (lastDate != null) {
                        selectorGetLastDateStart.closeDate = {$lt: lastDate.closeDate};
                    }
                    if (lastDate != null) {
                        Meteor.call('getDateEndOfProcess', selectorGetLastDateStart, function (err, startDate) {
                            if (startDate != null) {
                                var dateVal = moment(lastDate.closeDate).toDate();
                                var dateValmin = moment(startDate.closeDate).add(1, "days").toDate();
                                $("#journalDate").data('DateTimePicker').maxDate(dateVal).minDate(dateValmin);
                            } else {
                                var dateVal = moment(lastDate.closeDate).toDate();
                                $("#journalDate").data('DateTimePicker').maxDate(dateVal);
                            }
                        })

                    } else {
                        Meteor.call('getDateEndOfProcess', selectorGetLastDateStart, function (err, startDate) {
                            if (startDate != null) {
                                var dateValmin = moment(startDate.closeDate).add(1, "days").toDate();
                                $("#journalDate").data('DateTimePicker').minDate(dateValmin);
                            }
                        })
                    }
                })
            }
        })
    };

