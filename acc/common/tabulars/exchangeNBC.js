Acc.TabularTable.ExchangeNBC = new Tabular.Table({
    name: "accExchangeNBCList",
    collection: Acc.Collection.ExchangeNBC,
    pagingType: "full_numbers",
    autoWidth: false,
    columnDefs: [
        {"width": "12px", "targets": 0}
    ],
    order: [['1', 'desc']],
    columns: [
        {title: '<i class="fa fa-bars"></i>', tmpl: Meteor.isClient && Template.acc_exchangeNBCAction},
        {data: "dateTime", title: "Date"},
        {data: "base", title: "Base Currency"},
        {
            data: "rates",
            title: "Rates",
            render: function (val, type, doc) {
                return JSON.stringify(val);
            }
        }
    ]
});