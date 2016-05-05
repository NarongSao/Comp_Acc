accRoutes.route('/currencyClosingReport', {
    name: 'acc.currencyClosingReport',
    subscriptions: function (params, queryParams) {
        this.register(
            'accCloseChartAccount',
            Meteor.subscribe('accCloseChartAccount')
        ),
        this.register(
            'cpanel_exchange',
            Meteor.subscribe('cpanel_exchange')
        );
    },
    action: function (params, queryParams) {
        Layout.main('acc_currencyClosingReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Currency Closing Report',
        parent: 'acc.home'
    }
});

accRoutes.route('/currencyClosingReportGen', {
    name: 'acc.currencyClosingReportGen',
    action: function (params, queryParams) {
        Layout.report('acc_currencyClosingReportGen');
    }
});
