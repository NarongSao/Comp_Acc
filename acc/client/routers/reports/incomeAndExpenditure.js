accRoutes.route('/IncomeAndExpenditureReport', {
    name: 'acc.IncomeAndExpenditureReport',
    subscriptions: function (params, queryParams) {
        this.register(
            'acc_exchangeNBC',
            Meteor.subscribe('acc_exchangeNBC')
        );
    },
    action: function (params, queryParams) {
        Layout.main('acc_IncomeAndExpenditure');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Income And Expenditure Report',
        parent: 'acc.home'
    }
});

accRoutes.route('/IncomeAndExpenditureReportGen', {
    name: 'acc.IncomeAndExpenditureReportGen',
    action: function (params, queryParams) {
        Layout.report('acc_IncomeAndExpenditureReportGen');
    }
});
