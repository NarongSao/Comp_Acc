accRoutes.route('/backup', {
    name: 'acc.backup',
    /*subscriptions: function (params, queryParams) {
        this.register(
            'acc_backup',
            Meteor.subscribe('acc_backup')
        );
    },*/
    action: function (params, queryParams) {
        Layout.main('acc_backup');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Backup',
        parent: 'acc.home'
    }
});
