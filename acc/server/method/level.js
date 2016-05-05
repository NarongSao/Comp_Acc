Meteor.methods({
    getMaxLevel: function(){
       return Acc.Collection.ChartAccount.findOne({$sort: {level: -1}}).level;
    }
})