accRoutes.route('/mapClosing', {
  name: 'acc.mapClosing',
  action: function(params, queryParams) {
    Layout.main('acc_mapClosing');
  },
  breadcrumb: {
    //params: ['id'],
    //queryParams: ['show', 'color'],
    title: 'Map Closing',
    parent: 'acc.home'
  }
});
