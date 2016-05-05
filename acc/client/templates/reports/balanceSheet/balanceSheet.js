var reportTpl = Template.acc_balanceSheetReport,
    generateTpl = Template.acc_balanceSheetReportGen,
    generateTplForAll = Template.acc_balanceSheetForAllReportGen;

reportTpl.onRendered(function () {
    var name = $('[name="date"]');
    DateTimePicker.date(name);

    // SEO
    SEO.set({
        title: 'Balance Sheet',
        description: 'Description for this page'
    });
});

generateTpl.onRendered(function(){
    // SEO
    SEO.set({
        title: 'Balance Sheet Report',
        description: 'Description for this page'
    });
});

generateTplForAll.onRendered(function(){
    // SEO
    SEO.set({
        title: 'Balance Sheet Report',
        description: 'Description for this page'
    });
});



generateTplForAll.helpers({
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
    dataMain: function () {
        // Get query params
        //FlowRouter.watchPathChange();
        var q = FlowRouter.current().queryParams;

        var callId = JSON.stringify(q);

        var call = Meteor.callAsync(callId, 'acc_BalanceSheetMulti', q);

        if (!call.ready()) {
            return false;
        }

        return call.result();
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
    dataMain: function () {
        // Get query params
        //FlowRouter.watchPathChange();
        var q = FlowRouter.current().queryParams;

        Fetcher.setDefault('data',false);
        Fetcher.retrieve('data','acc_BalanceSheet',q);

        return Fetcher.get('data');


        //var callId = JSON.stringify(q);
        //
        //var call = Meteor.callAsync(callId, 'acc_BalanceSheet', q);
        //
        //if (!call.ready()) {
        //    return false;
        //}
        //return call.result();
    }
});







