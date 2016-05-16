accRoutes.route('/trialBalanceReport', {
    name: 'acc.trialBalanceReport',
    subscriptions: function (params, queryParams) {
        this.register(
            'cpanel_exchange',
            Meteor.subscribe('cpanel_exchange')
        );
    },
    action: function (params, queryParams) {
        Layout.main('acc_trialBalanceReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Trial Balance Report',
        parent: 'acc.home'
    }
});

accRoutes.route('/trialBalanceReportGen', {
    name: 'acc.trialBalanceReportGen',
    action: function (params, queryParams) {
        Layout.report('acc_trialBalanceReportGen');
    }
});
