accRoutes.route('/mapNBCBalance', {
    name: 'acc.mapNbcBalance',
    subscriptions: function (params, queryParams) {
        this.register(
            'accMapNBCBalance',
            Meteor.subscribe('accMapNBCBalance')
        ),this.register(
            'accChartAccountNBC',
            Meteor.subscribe('accChartAccountNBC')
        );
    },
    action: function (params, queryParams) {
        Layout.main('acc_mapNBCBalance');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Map NBC Balance',
        parent: 'acc.home'
    }
});
