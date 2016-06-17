accRoutes.route('/fixAssetExpense', {
    name: 'acc.fixAssetExpense',
    subscriptions: function (params, queryParams) {
        this.register(
            'accFixAssetExpense',
            Meteor.subscribe('accFixAssetExpense')
        );
    },
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