var reportTpl = Template.acc_currencyClosingReport,
    generateTpl = Template.acc_currencyClosingReportGen;

reportTpl.onRendered(function () {
    var name = $('[name="date"]');
    DateTimePicker.dateRange(name);

    // SEO
    SEO.set({
        title: 'Currency Closing',
        description: 'Description for this page'
    });
});


generateTpl.onRendered(function () {
    // SEO

    SEO.set({
        title: 'Currency Closing Report',
        description: 'Description for this page'
    });
});

reportTpl.events({
    'click .gae': function (e, t) {
        Meteor.call('generateAndEntry', true);
        Meteor.call('print', false);
    },
    'click .g': function (e, t) {
        Meteor.call('generateAndEntry', false);
        Meteor.call('print', false);
    },
    'click .gaep': function (e, t) {
        Meteor.call('generateAndEntry', true);
        Meteor.call('print', true);
    },
    'click .remove': function (e, t) {
        var id = this._id;
        var lastEnd = Acc.Collection.Closing.findOne({}, {
            sort: {
                dateTo: -1
            }
        });
        var cur = Acc.Collection.Closing.findOne({
            _id: id
        });
            if (moment(lastEnd.dateTo).format("YYYY-MM-DD") == moment(cur.dateTo).format("YYYY-MM-DD")) {
                alertify.confirm("Are you sure to delete ?")
                    .set({
                        onok: function (closeEvent) {
                            Meteor.call('closingRemove', id);
                        },
                        title: fa("remove", "Closing")
                    });
            } else {
                alertify.error(
                    "You can't delete. This is not the last Closing!!!");
            }
        }


});


generateTpl.helpers({
    options: function () {
        // font size = null (default), bg
        // paper = a4, a5, mini
        // orientation = portrait, landscape
        return {
            //fontSize: 'bg',
            paper: 'a4',
            orientation: 'portrait'
        };
    },
    data: function () {
        // Get query params
        //FlowRouter.watchPathChange();
        var q = FlowRouter.current().queryParams;

        /*Fetcher.setDefault('data',false);
         Fetcher.retrieve('data','acc_currencyClosingReport',q, Session.get("currentBranch"));

         return Fetcher.get('data');*/
        var callId = JSON.stringify(q);
        var call = Meteor.callAsync(callId, 'acc_currencyClosingReport', q, Session.get("currentBranch"));

        if (!call.ready()) {
            return false;
        }
        return call.result();
    },
    check: function (data) {
        if (data.generateAndEntry == true) {
            if (data.insertBaseSuccess == true && data.insertSuccess == true) {
                alertify.success("Entry Success.");

            } else {
                alertify.error("Entry Fail.");

            }
        }
    }
});





