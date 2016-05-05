Meteor.methods({
    getVoucherId: function(currencyId,startDate){
        return Acc.Collection.Journal.findOne({currencyId: currencyId, journalDate: {$gte: startDate}},{sort: {voucherId: -1}});
    }
})