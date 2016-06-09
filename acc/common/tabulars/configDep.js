Acc.TabularTable.ConfigDep = new Tabular.Table({
  name: "accConfigDepList",
  collection: Acc.Collection.ConfigDep,
  pagingType: "full_numbers",
  autoWidth: true,
  columnDefs: [{
    "width": "12px",
    "targets": 0
  }],
  columns: [{
    title: '<i class="fa fa-bars"></i>',
    tmpl: Meteor.isClient && Template.acc_configDepAction
  }, {
    data: "depPerTime",
    title: "Depreciation Per Time",
    render:function(val,type,doc) {
        return val+ " month"
    }
  }, {
    data: "depType",
    title: "Depreciation Type"
  }],
  order: ['0', 'desc'],
  pagingType: "full_numbers"
});
