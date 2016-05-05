// Index
accRoutes.route('/journal', {
  name: 'acc.journal',
  // subscriptions: function (params, queryParams) {
  //     this.register(
  //         'acc_Journal',
  //         Meteor.subscribe('acc_Journal')
  //     ),this.register(
  //         'accChartAccount',
  //         Meteor.subscribe('accChartAccount')
  //     ),this.register(
  //         'accDateEndOfProcess',
  //         Meteor.subscribe('accDateEndOfProcess')
  //     );
  // },
  action: function(params, queryParams) {
    Layout.main('acc_journal');
  },
  breadcrumb: {
    //params: ['id'],
    //queryParams: ['show', 'color'],
    title: 'Journal',
    parent: 'acc.home'
  }
});

// Insert
accRoutes.route('/journalInsert', {
  name: 'acc.journalInsert',
  /*subscriptions: function(params, queryParams) {
    this.register(
      'acc_Journal',
      Meteor.subscribe('acc_Journal')
    )
        , this.register(
      'accCloseChartAccount',
      Meteor.subscribe('accCloseChartAccount')
    ), this.register(
      'accDateEndOfProcess',
      Meteor.subscribe('accDateEndOfProcess')
    );
  },*/
  action: function(params, queryParams) {
    Layout.main('acc_journalInsert');
  },
  breadcrumb: {
    //params: ['id'],
    //queryParams: ['show', 'color'],
    title: 'Insert',
    parent: 'acc.journal'
  }
});

// Update
accRoutes.route('/journalUpdate/:journalId', {
  name: 'acc.journalUpdate',
  /*subscriptions: function(params, queryParams) {
    this.register(
      'acc_Journal',
      Meteor.subscribe('acc_Journal')
    ), this.register(
      'accCloseChartAccount',
      Meteor.subscribe('accCloseChartAccount')
    ), this.register(
      'accDateEndOfProcess',
      Meteor.subscribe('accDateEndOfProcess')
    );
  },*/
  action: function(params, queryParams) {
    Layout.main('acc_journalUpdate');
  },
  breadcrumb: {
    //params: ['id'],
    //queryParams: ['show', 'color'],
    title: 'Update',
    parent: 'acc.journal'
  }
});
