Meteor.methods({
   getJournal: function(selector){
       return Acc.Collection.Journal.findOne(selector);
   },
    getJournalForLedger: function(voucherId,id){
        var data = Acc.Collection.Journal.findOne({voucherId: voucherId,_id: id});
         return data;
    }

});


