Meteor.methods({
   getJournal: function(selector){
       return Acc.Collection.Journal.findOne(selector);
   }
});