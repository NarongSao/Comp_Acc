accRoutes.route('/exchangeNBC', {
  name: 'acc.exchangeNBC',
  subscriptions: function(params, queryParams) {
    this.register('acc_exchangeNBC', Meteor.subscribe('acc_exchangeNBC'));
  },
  action: function(params, queryParams) {
    Layout.main('acc_exchangeNBC');
  },
  breadcrumb: {
    //params: ['id'],
    //queryParams: ['show', 'color'],
    title: 'Exchange NBC',
    parent: 'acc.home'
  }
});
