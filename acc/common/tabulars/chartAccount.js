Acc.TabularTable.ChartAccount = new Tabular.Table({
  name: "accChartAccountList",
  collection: Acc.Collection.ChartAccount,
  pagingType: "full_numbers",
  autoWidth: true,
  columnDefs: [{
      "width": "12px",
      "targets": 0
    }, {
      "width": "40px",
      "targets": 1
    }

  ],
  columns: [{
      title: '<i class="fa fa-bars"></i>',
      tmpl: Meteor.isClient && Template.acc_chartAccountAction
    }, {
      data: "code",
      title: "Code"
    }, {
      data: "name",
      title: "Name"
    }, {
      data: "parentId",
      title: "Parent",
      render: function(val, type, doc) {
        var result = "";
        if (val != null) {
          data = Acc.Collection.ChartAccount.findOne({
            _id: val
          });
          result = data.code + " | " + data.name;
        }
        return result;
      }
    },
    //{data: "accountTypeId", title: "Account Type"},
    {
      data: "accountTypeId",
      title: "Account Type",
      render: function(val, type, doc) {
        return Acc.Collection.AccountType.findOne({
          _id: val
        }).name;
      }
    }

  ],
  order: ['0', 'desc'],
  pagingType: "full_numbers"
});
