accRoutes.route('/home', {
    name: 'acc.home',
    action: function (params, queryParams) {
        Layout.main('acc_home');
    },
    breadcrumb: {
        title: 'Home'
    }
});
