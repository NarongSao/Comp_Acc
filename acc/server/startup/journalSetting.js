Meteor.startup(function () {
    if (Acc.Collection.JournalSetting.find().count() == 0) {
        Acc.Collection.JournalSetting.insert(
            {
                _id: '1',
                name: 10
            }
        );
        Acc.Collection.JournalSetting.insert(
            {
                _id: '2',
                name: 20
            }
        );
        Acc.Collection.JournalSetting.insert(
            {
                _id: '3',
                name: 30
            }
        );
        Acc.Collection.JournalSetting.insert(
            {
                _id: '4',
                name: 40
            }
        );
        Acc.Collection.JournalSetting.insert(
            {
                _id: '5',
                name: 50
            }
        );
        Acc.Collection.JournalSetting.insert(
            {
                _id: '6',
                name: 60
            }
        );
        Acc.Collection.JournalSetting.insert(
            {
                _id: '7',
                name: 70
            }
        );
        Acc.Collection.JournalSetting.insert(
            {
                _id: '8',
                name: 80
            }
        );
        Acc.Collection.JournalSetting.insert(
            {
                _id: '9',
                name: 90
            }
        );
        Acc.Collection.JournalSetting.insert(
            {
                _id: '10',
                name: 100
            }
        );
        Acc.Collection.JournalSetting.insert(
            {
                _id: '11',
                name: 200
            }
        );

    }
});