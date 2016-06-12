Acc.TabularTable.MapFixAsset = new Tabular.Table({
  name: "accMapFixAssetList",
  collection: Acc.Collection.MapFixAsset,
  pagingType: "full_numbers",
  autoWidth: true,
  columnDefs: [{
    "width": "12px",
    "targets": 0
  }],
  columns: [{
    title: '<i class="fa fa-bars"></i>',
    tmpl: Meteor.isClient && Template.acc_mapFixAssetAction
  }, {
    data: "fixAssetDoc.name",
    title: "FixAsset"
  }, {
    data: "accuFixAssetDoc.name",
    title: "FixAsset Accumulated"
  }, {
    data: "fixAssetExpenseDoc.name",
    title: "FixAsset Expense"
  }],
  order: ['0', 'desc'],
  pagingType: "full_numbers",
  extraFields: ['fixAsset','accuFixAsset','fixAssetExpense']
});
