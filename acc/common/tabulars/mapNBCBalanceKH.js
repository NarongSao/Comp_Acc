Acc.TabularTable.MapNBCBalanceKH = new Tabular.Table({
    name: "accMapNBCBalanceKH",
    collection: Acc.Collection.MapNBCBalanceKH,
    pagingType: "full_numbers",
    autoWidth: true,
    columnDefs: [
        {"width": "12px", "targets": 0}

    ],
    columns: [
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.acc_mapNBCBalanceKHAction
        },
        {
            data: "accountDocNBC", title: "NBC Account",
            render: function (val, doc, type) {
                return val.code + " | " + val.name;
            }
        }
        ,
        {
            data: "transaction", title: "Chart Account",
            render: function (val, type, doc) {
                var str = "";
                val.forEach(function (obj) {
                    if (obj.accountDoc) {
                        str += obj.accountDoc.code + ' | ' + obj.accountDoc.name + "<br>";
                    }
                });
                return str;
            }
        }
    ],
    order: ['0', 'desc'],
    pagingType: "full_numbers"

});