accRoutes.route('/chartNetIncome', {
  name: 'acc.chartNetIncome',
  action: function(params, queryParams) {
    Layout.main('acc_chartNetIncome');
  },
  breadcrumb: {
    //params: ['id'],
    //queryParams: ['show', 'color'],
    title: 'Chart NetIncome',
    parent: 'acc.home'
  }
});
