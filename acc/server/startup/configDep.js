Meteor.startup(function () {
    if (Acc.Collection.ConfigDep.find().count() == 0) {

        Acc.Collection.ConfigDep.insert({depPerTime: 1,depType: "01: Straight Line"});

    }
});