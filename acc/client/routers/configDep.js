accRoutes.route('/configDep', {
    name: 'acc.configDep',
    action: function (params, queryParams) {
        Layout.main('acc_configDep');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Config Depreciation',
        parent: 'acc.home'
    }
});