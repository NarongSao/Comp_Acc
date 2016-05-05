accRoutes.route('/dateEndOfProcess', {
    name: 'acc.dateEndOfProcess',
    subscriptions: function (params, queryParams) {
        this.register(
            'accDateEndOfProcess',
            Meteor.subscribe('accDateEndOfProcess')
        );
    },
    action: function (params, queryParams) {
        Layout.main('acc_dateEndOfProcess');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'End Of Process',
        parent: 'acc.home'
    }
});