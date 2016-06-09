accRoutes.route('/fixAssetExpense', {
    name: 'acc.fixAssetExpense',
    /*subscriptions: function (params, queryParams) {
        this.register(
            'accDateEndOfProcess',
            Meteor.subscribe('accDateEndOfProcess')
        ),this.register(
            'accCloseChartAccount',
            Meteor.subscribe('accCloseChartAccount')
        );
    },*/
    action: function (params, queryParams) {
        Layout.main('acc_fixAssetExpense');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Fixed Asset',
        parent: 'acc.home'
    }
});