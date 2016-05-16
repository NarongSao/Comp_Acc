var reportTpl = Template.acc_ProfitLostReport,
    generateTpl = Template.acc_ProfitLostReportGen,
    generateTplForAll = Template.acc_ProfitLostForAllReportGen;

reportTpl.onRendered(function () {
    var name = $('[name="date"]');
    DateTimePicker.dateRange(name);

    // SEO
    SEO.set({
        title: 'Profit & Lost',
        description: 'Description for this page'
    });
});

generateTplForAll.onRendered(function(){
    // SEO
    SEO.set({
        title: 'Profit & Lost Report',
        description: 'Description for this page'
    });
});

generateTpl.onRendered(function(){
    // SEO
    SEO.set({
        title: 'Profit & Lost Report',
        description: 'Description for this page'
    });
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
    }
    ,data: function () {
        // Get query params
        //FlowRouter.watchPathChange();
        var q = FlowRouter.current().queryParams;

       /* var tmp='acc_profitLost';
        if(q.currencyId="All"){
            tmp='acc_profitLostForAll';
        }*/

        Fetcher.setDefault('data',false);
        Fetcher.retrieve('data','acc_profitLost',q);

        return Fetcher.get('data');

       /* var callId = JSON.stringify(q);
        var call = Meteor.callAsync(callId,'acc_profitLost', q);

        if (!call.ready()) {
            return false;
        }
        return call.result();*/
    }
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
    }
    ,data: function () {
        // Get query params
        //FlowRouter.watchPathChange();
        var q = FlowRouter.current().queryParams;

        var callId = JSON.stringify(q);
        var call = Meteor.callAsync(callId, 'acc_profitLostForAll', q);

        if (!call.ready()) {
            return false;
        }
        return call.result();
    }
});





