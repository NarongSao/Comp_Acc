Acc.TabularTable.MapNBCIncomeKH = new Tabular.Table({
    name: "accMapNBCIncomeKHList",
    collection: Acc.Collection.MapNBCIncomeKH,
    pagingType: "full_numbers",
    autoWidth: true,
    columnDefs: [
        {"width": "12px", "targets": 0}

    ],
    columns: [
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.acc_mapNBCIncomeKHAction
        },
        {
            data: "accountDocNBC", title: "NBC Account",
            render: function (val, doc, type) {
                return val.code +" | "+ val.name;
            }
        },
        {
            data: "transaction", title: "Chart Account",
            render: function (val, type, doc) {
                var str="";
                    val.forEach(function (obj) {
                        if(obj.accountDoc) {
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