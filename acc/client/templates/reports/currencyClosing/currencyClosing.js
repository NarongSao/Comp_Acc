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





