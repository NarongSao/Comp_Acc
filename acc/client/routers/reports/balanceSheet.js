accRoutes.route('/balanceSheetReport', {
  name: 'acc.balanceSheetReport',
  subscriptions: function(params, queryParams) {
    this.register(
        'cpanel_exchange',
        Meteor.subscribe('cpanel_exchange')
      );
  },
  action: function(params, queryParams) {
    Layout.main('acc_balanceSheetReport');
  },
  breadcrumb: {
    //params: ['id'],
    //queryParams: ['show', 'color'],
    title: 'Balance Sheet Report',
    parent: 'acc.home'
  }
});

accRoutes.route('/balanceSheetReportGen', {
  name: 'acc.balanceSheetReportGen',
  action: function(params, queryParams) {
    if (queryParams.currencyId == "All") {
      Layout.report('acc_balanceSheetForAllReportGen');
    } else {
      Layout.report('acc_balanceSheetReportGen');
    }

  }
});
