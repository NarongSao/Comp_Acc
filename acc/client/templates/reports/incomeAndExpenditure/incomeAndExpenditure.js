var reportTpl = Template.acc_IncomeAndExpenditure,
    generateTpl = Template.acc_IncomeAndExpenditureReportGen;

reportTpl.onRendered(function () {
    var name = $('[name="date"]');
    DateTimePicker.dateRange(name);

    // SEO
    SEO.set({
        title: 'Income And Expenditure Account',
        description: 'Description for this page'
    });
});


generateTpl.onRendered(function(){
    // SEO
    SEO.set({
        title: 'Income And Expenditure Account',
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

        Fetcher.setDefault('data',false);
        Fetcher.retrieve('data','acc_IncomeAndExpenditure',q);

        return Fetcher.get('data');

       /* var callId = JSON.stringify(q);
        var call = Meteor.callAsync(callId,'acc_IncomeAndExpenditure', q);

        if (!call.ready()) {
            return false;
        }
        return call.result();*/
    }
});
