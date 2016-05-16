accRoutes.route('/BalanceSheetNBCReport', {
    name: 'acc.BalanceSheetNBCReport',
    subscriptions: function (params, queryParams) {
        this.register(
            'acc_exchangeNBC',
            Meteor.subscribe('acc_exchangeNBC')
        );
    },
    action: function (params, queryParams) {
        Layout.main('acc_BalanceSheetNBCReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'BalanceSheet NBC Report',
        parent: 'acc.home'
    }
});

accRoutes.route('/BalanceSheetNBCReportGen', {
    name: 'acc.BalanceSheetNBCReportGen',
    action: function (params, queryParams) {
        Layout.report('acc_BalanceSheetNBCReportGen');
    }
});
