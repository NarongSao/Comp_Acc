/*
 Tabular
 */
Acc.TabularTable.Journal = new Tabular.Table({
    name: "JournalList",
    collection: Acc.Collection.Journal,
    pagingType: "full_numbers",
    autoWidth: false,
    columnDefs: [
        {"width": "12px", "targets": 0},
        {"width": "30px", "targets": 1},
        {"width": "30px", "targets": 2},
        {"width": "30px", "targets": 3},
        {"width": "30px", "targets": 4},
        {"width": "30px", "targets": 5},
        {"width": "30px", "targets": 6}
        /* ,
         {"width": "200px", "targets": 6}*/
    ],
    order: [['2', 'desc']],
    columns: [
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.acc_journalAction
        },
        {data: "_id", title: "Id"},
        {data: "journalDate", title: "Journal Date",
        render: function(val,type,doc){
            return moment(val).format("DD/MM/YYYY");
        }},
        {
            data: "voucherId", title: "Voucher",
            render: function (val, type, doc) {
                return val.substr(8, val.length)
            }
        },
        {data: "memo", title: "Description"},
        {data: "total", title: "Amount",
            render: function (val, type, doc) {
                if (val != null) {
                    var currencySymbol = Cpanel.Collection.Currency.findOne({_id: doc.currencyId}).symbol;
                    return currencySymbol + numeral(val).format("0,0.00");
                }
            }
        },
        {data: "currencyId", title: "Currency"}
    ],
    extraFields: ['currencyId','transactionAsset']

});