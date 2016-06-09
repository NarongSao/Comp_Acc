accRoutes.route('/IncomeAndExpenditureKhReport', {
    name: 'acc.IncomeAndExpenditureKhReport',
    subscriptions: function (params, queryParams) {
        this.register(
            'acc_exchangeNBC',
            Meteor.subscribe('acc_exchangeNBC')
        );
    },
    action: function (params, queryParams) {
        Layout.main('acc_IncomeAndExpenditureKh');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Income And Expenditure Report',
        parent: 'acc.home'
    }
});

accRoutes.route('/IncomeAndExpenditureKhReportGen', {
    name: 'acc.IncomeAndExpenditureKhReportGen',
    action: function (params, queryParams) {
        Layout.report('acc_IncomeAndExpenditureKhReportGen');
    }
});
