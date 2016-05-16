Meteor.startup(function() {
  if (Acc.Collection.MapClosing.find().count() == 0) {

    Acc.Collection.MapClosing.insert({
      chartAccountCompare: 'Equivalance Exchange Account',
    });
    Acc.Collection.MapClosing.insert({
      chartAccountCompare: 'Foreign Exchange Gain',
    });
    Acc.Collection.MapClosing.insert({
      chartAccountCompare: 'Loss on Foreign Exchange',
    });

    Acc.Collection.MapClosing.insert({
      chartAccountCompare: 'Retain Earning',
    });
  }
});
