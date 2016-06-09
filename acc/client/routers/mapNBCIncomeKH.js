accRoutes.route('/mapNBCIncomeKH', {
    name: 'acc.mapNbcIncomeKH',
    subscriptions: function (params, queryParams) {
        this.register(
            'accMapNBCIncomeKH',
            Meteor.subscribe('accMapNBCIncomeKH')
        ),this.register(
            'accChartAccountNBCKH',
            Meteor.subscribe('accChartAccountNBCKH')
        );
    },
    action: function (params, queryParams) {
        Layout.main('acc_mapNBCIncomeKH');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Map NBC Income',
        parent: 'acc.home'
    }
});
