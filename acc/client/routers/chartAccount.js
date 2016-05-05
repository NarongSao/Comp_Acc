accRoutes.route('/chartAccount', {
  name: 'acc.chartAccount',
  action: function(params, queryParams) {
    Layout.main('acc_chartAccount');
  },
  breadcrumb: {
    //params: ['id'],
    //queryParams: ['show', 'color'],
    title: 'Chart Account',
    parent: 'acc.home'
  }
});
