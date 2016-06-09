accRoutes.route('/mapNBCBalanceKH', {
    name: 'acc.mapNbcBalanceKH',
    subscriptions: function (params, queryParams) {
        this.register(
            'accMapNBCBalanceKH',
            Meteor.subscribe('accMapNBCBalanceKH')
        ),this.register(
            'accChartAccountNBCKH',
            Meteor.subscribe('accChartAccountNBCKH')
        );
    },
    action: function (params, queryParams) {
        Layout.main('acc_mapNBCBalanceKH');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Map NBC Balance',
        parent: 'acc.home'
    }
});
