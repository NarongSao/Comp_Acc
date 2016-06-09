Acc.TabularTable.FixAssetExpense = new Tabular.Table({
    name: "accFixAssetExpenseList",
    collection: Acc.Collection.FixAssetExpense,
    pagingType: "full_numbers",
    autoWidth: true,
    columnDefs: [
        {"width": "12px", "targets": 0}
    ],
    columns: [
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.acc_fixAssetExpenseAction
        },
        {data: "date", title: "Date",
            render: function (val,type,doc) {
               return moment(val).format("DD/MM/YYYY")
            }
        },
        {data: "transactionExpense", title: "Depreciation Expense",
            render: function (val,type,doc) {
                var exp="";
                val.forEach(function (obj) {
                    exp +=moment(obj.buyDate).format("DD/MM/YYYY")+"    :     "+ obj.account +"  :  <b>"+ obj.value +obj.currencyId+"</b><br>"
                })
                return exp;
            }
        },
        
        {data: "createdBy", title: "User Create",
         render: function(val,type,doc){
         return Meteor.users.findOne({_id: val}).username;
         }}

    ],
    order: ['1', 'desc'],
    pagingType: "full_numbers",
    extraFields: ['journalId','_id']
});