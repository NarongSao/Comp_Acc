accRoutes.route('/fixAssetDep', {
    name: 'acc.fixAssetDep',
    action: function (params, queryParams) {
        Layout.main('acc_fixAssetDep');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Fixed Asset List',
        parent: 'acc.home'
    }
});