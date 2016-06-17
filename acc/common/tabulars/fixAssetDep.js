Acc.TabularTable.FixAssetDep = new Tabular.Table({
    name: "accFixAssetDepList",
    collection: Acc.Collection.FixAssetDep,
    pagingType: "full_numbers",
    autoWidth: true,
    columnDefs: [
        {"width": "12px", "targets": 0},
        {"width": "30%", "targets": 2},
    ],
    columns: [
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.acc_fixAssetDepAction
        },
        {
            data: "date", title: "Date",
            render: function (val, type, doc) {
                return moment(val).format("DD/MM/YYYY")
            }
        },
        {
            data: "transactionAsset", title: "Account",
            render: function (val, type, doc) {
                var exp = "";
                val.forEach(function (obj) {
                    exp += obj.account + "<br>";
                })
                return exp;
            }
        }, {
            data: "transactionAsset", title: "Description",
            render: function (val, type, doc) {
                var exp = "";
                val.forEach(function (obj) {
                    exp += obj.description + "<br>";
                })
                return exp;
            }
        },{
            data: "transactionAsset", title: "Code",
            render: function (val, type, doc) {
                var exp = "";
                val.forEach(function (obj) {
                    exp += obj.code + "<br>";
                })
                return exp;
            }
        },{
            data: "transactionAsset", title: "Value",
            render: function (val, type, doc) {
                var exp = "";
                val.forEach(function (obj) {
                    exp += obj.value + "<br>";
                })
                return exp;
            }
        }, {
            data: "transactionAsset", title: "Life",
            render: function (val, type, doc) {
                var exp = "";
                val.forEach(function (obj) {
                    exp += obj.life + "<br>";
                })
                return exp;
            }
        }, {
            data: "transactionAsset", title: "Salvage",
            render: function (val, type, doc) {
                var exp = "";
                val.forEach(function (obj) {
                    exp += obj.estSalvage + "<br>";
                })
                return exp;
            }
        }, {
            data: "transactionAsset", title: "Percent",
            render: function (val, type, doc) {
                var exp = "";
                val.forEach(function (obj) {
                    exp += obj.percent + "<br>";
                })
                return exp;
            }
        },

        {data: "currencyId", title: "Currency"},
       /* {
            data: "createdBy", title: "User Create",
            render: function (val, type, doc) {
                return Meteor.users.findOne({_id: val}).username;
            }
        }*/

    ],
    order: ['1', 'desc'],
    pagingType: "full_numbers",
    extraFields: ['journalId', '_id']
});