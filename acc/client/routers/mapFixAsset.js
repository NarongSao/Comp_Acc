accRoutes.route('/mapFixAsset', {
  name: 'acc.mapFixAsset',
  action: function(params, queryParams) {
    Layout.main('acc_mapFixAsset');
  },
  breadcrumb: {
    //params: ['id'],
    //queryParams: ['show', 'color'],
    title: 'Map Fix Asset',
    parent: 'acc.home'
  }
});
