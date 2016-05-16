accRoutes.route('/ledgerReport', {
    name: 'acc.ledgerReport',
    subscriptions: function (params, queryParams) {

        this.register(
            'cpanel_exchange',
            Meteor.subscribe('cpanel_exchange')
        );
    },
    action: function (params, queryParams) {
        Layout.main('acc_ledgerReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Ledger Report',
        parent: 'acc.home'
    }
});

accRoutes.route('/ledgerReportGen', {
    name: 'acc.ledgerReportGen',
    subscriptions: function (params, queryParams) {
        this.register(
            'acc_Journal',
            Meteor.subscribe('acc_Journal')
        );
    },
    action: function (params, queryParams) {
        Layout.report('acc_ledgerReportGen');
    }
})
;
