Meteor.methods({
   getChartAccount: function(selector){
       return Acc.Collection.ChartAccount.findOne(selector);
   }
});