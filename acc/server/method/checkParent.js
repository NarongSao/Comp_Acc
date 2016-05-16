Meteor.methods({
   checkParent: function(id){
       return Acc.Collection.ChartAccount.findOne({_id: id});
   }
});