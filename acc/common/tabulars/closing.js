Acc.TabularTable.Closing = new Tabular.Table({
    name: "accClosingList",
    collection: Acc.Collection.Closing,
    pagingType: "full_numbers",
    autoWidth: false,
    columnDefs: [
        {"width": "12px", "targets": 0}
    ],
    order: [['1', 'desc']],
    columns: [
        {title: '<i class="fa fa-bars"></i>', tmpl: Meteor.isClient && Template.acc_closingAction},
        {
            data: "dateFrom", title: "Date From",
            render: function (val, type, doc) {
                return moment(val).format("DD/MM/YYYY");
            }
        },
        {
            data: "dateTo", title: "Date To",
            render: function (val, type, doc) {
                return moment(val).format("DD/MM/YYYY");
            }
        }
    ]
});