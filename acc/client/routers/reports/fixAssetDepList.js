accRoutes.route('/fixAssetDepSummaryList', {
    name: 'acc.fixAssetDepSummaryList',
    action: function (params, queryParams) {
        Layout.report('acc_fixAssetDepSummaryList');
    }
});

accRoutes.route('/fixAssetDepList', {
    name: 'acc.fixAssetDepList',
    action: function (params, queryParams) {
        Layout.report('acc_fixAssetDepList');
    }
});
