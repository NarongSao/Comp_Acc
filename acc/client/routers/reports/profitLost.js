accRoutes.route('/ProfitLostReport', {
    name: 'acc.ProfitLostReport',
    subscriptions: function (params, queryParams) {
        this.register(
            'cpanel_exchange',
            Meteor.subscribe('cpanel_exchange')
        );
    },
    action: function (params, queryParams) {
        Layout.main('acc_ProfitLostReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Profit & Lost Report',
        parent: 'acc.home'
    }
});

accRoutes.route('/ProfitLostReportGen', {
    name: 'acc.ProfitLostReportGen',
    action: function (params, queryParams) {
        if (queryParams.currencyId == "All") {
            Layout.report('acc_ProfitLostForAllReportGen');
        } else {
            Layout.report('acc_ProfitLostReportGen');
        }
    }
});
