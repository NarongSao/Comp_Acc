accRoutes.route('/BalanceSheetNbcKhReport', {
    name: 'acc.BalanceSheetNbcKhReport',
    subscriptions: function (params, queryParams) {
        this.register(
            'acc_exchangeNBC',
            Meteor.subscribe('acc_exchangeNBC')
        );
    },
    action: function (params, queryParams) {
        Layout.main('acc_BalanceSheetNbcKhReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'BalanceSheet NBC Report',
        parent: 'acc.home'
    }
});

accRoutes.route('/BalanceSheetNbcKhReportGen', {
    name: 'acc.BalanceSheetNbcKhReportGen',
    action: function (params, queryParams) {
        Layout.report('acc_BalanceSheetNbcKhReportGen');
    }
});
