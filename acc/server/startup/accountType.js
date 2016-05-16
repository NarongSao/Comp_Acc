Meteor.startup(function () {
    if (Acc.Collection.AccountType.find().count() == 0) {
        Acc.Collection.AccountType.insert(
            {
                _id: '10',
                name: 'Other Current Asset'
            }
        );
        Acc.Collection.AccountType.insert(
            {
                _id: '11',
                name: 'Fixed Asset'
            }
        );
        Acc.Collection.AccountType.insert(
            {
                _id: '12',
                name: 'Other Asset'
            }
        );
        Acc.Collection.AccountType.insert(
            {
                _id: '20',
                name: 'Other Current Liability'
            }
        );
        Acc.Collection.AccountType.insert(
            {
                _id: '21',
                name: 'Long Term Liability'
            }
        );
        Acc.Collection.AccountType.insert(
            {
                _id: '30',
                name: 'Equity'
            }
        );
        Acc.Collection.AccountType.insert(
            {
                _id: '40',
                name: 'Income'
            }
        );
        Acc.Collection.AccountType.insert(
            {
                _id: '41',
                name: 'Other Income'
            }
        );
        Acc.Collection.AccountType.insert(
            {
                _id: '50',
                name: 'Expense'
            }
        );
        Acc.Collection.AccountType.insert(
            {
                _id: '51',
                name: 'Other Expense'
            }
        );

    }
});