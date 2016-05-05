accRoutes.route('/mapNBCIncome', {
    name: 'acc.mapNbcIncome',
    subscriptions: function (params, queryParams) {
        this.register(
            'accMapNBCIncome',
            Meteor.subscribe('accMapNBCIncome')
        ),this.register(
            'accChartAccountNBC',
            Meteor.subscribe('accChartAccountNBC')
        );
    },
    action: function (params, queryParams) {
        Layout.main('acc_mapNBCIncome');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Map NBC Income',
        parent: 'acc.home'
    }
});
