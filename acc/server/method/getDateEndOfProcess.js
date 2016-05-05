Meteor.methods({
   getDateEndOfProcess: function(selector){
       return Acc.Collection.DateEndOfProcess.findOne(selector, {sort: {closeDate: -1}});
   }
});