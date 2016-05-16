accRoutes.route('/restore', {
    name: 'acc.restore',
    /*subscriptions: function (params, queryParams) {
     this.register(
     'acc_restore',
     Meteor.subscribe('acc_restore')
     );
     },*/
    action: function (params, queryParams) {
        Layout.main('acc_restore');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Restore',
        parent: 'acc.home'
    }
});