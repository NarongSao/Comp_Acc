Acc.TabularTable.DateEndOfProcess = new Tabular.Table({
    name: "accDateEndOfProcessList",
    collection: Acc.Collection.DateEndOfProcess,
    pagingType: "full_numbers",
    autoWidth: true,
    columnDefs: [
        {"width": "12px", "targets": 0}
    ],
    columns: [
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.acc_dateEndOfProcessAction
        },
        {data: "closeDate", title: "Date"},
        {
            data: "createdBy", title: "User Create",
            render: function (val, type, doc) {
                return Meteor.users.findOne({_id: val}).username;
            }
        }

    ],
    order: ['1', 'desc'],
    pagingType: "full_numbers"
});