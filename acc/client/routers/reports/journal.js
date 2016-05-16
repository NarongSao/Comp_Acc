accRoutes.route('/journalReport', {
    name: 'acc.journalReport',

    action: function (params, queryParams) {
        Layout.main('acc_journalReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Journal Report',
        parent: 'acc.home'
    }
});

accRoutes.route('/journalReportGen', {
    name: 'acc.journalReportGen',
    action: function (params, queryParams) {
        Layout.report('acc_journalReportGen');
    }
});
