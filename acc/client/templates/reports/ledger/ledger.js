var reportTpl = Template.acc_ledgerReport,
    generateTpl = Template.acc_ledgerReportGen,
    ledgerTpl = Template.acc_ledgerReportGen,
    ledgerShow = Template.acc_LedgerShow;

reportTpl.onRendered(function () {
    var name = $('[name="date"]');
    DateTimePicker.dateRange(name);

    // SEO
    SEO.set({
        title: 'Ledger',
        description: 'Description for this page'
    });
});

generateTpl.onRendered(function(){
    // SEO
    SEO.set({
        title: 'Ledger Report',
        description: 'Description for this page'
    });
});


reportTpl.events({
   'change [name="accountType"]':function(e){
       Session.set('accountTypeIdSession',$(e.currentTarget).val());
   }
});

ledgerTpl.onRendered(function() {
    // Create new  alertify
    createNewAlertify("showJournal");
});
//Event
ledgerTpl.events({
    'click .split-account-detail': function (e, t) {
        var self = this;
        /*var tr = $(e.currentTarget).closest("tr");
         var voucher= tr.find('.voucher-id').text().trim();*/
        // var data = Acc.Collection.Journal.findOne({voucherId: self.voucherId,_id: self._id});

        Meteor.call('getJournalForLedger',self.voucherId,self._id,function (err,data) {
            alertify.showJournal(fa("eye", "Journal"),renderTemplate(ledgerShow, data));
        })
    }
});


//Helper
ledgerShow.helpers({
    formatMoney: function (val) {
        return numeral(val).format('0,0.00');
    },
    getCurrency: function (id) {
        return Cpanel.Collection.Currency.findOne({_id: id}).symbol;
    },
    getChartAccount: function (id) {
        return Acc.Collection.ChartAccount.findOne({_id: id}).name;
    }
})

generateTpl.helpers({

    options: function () {
        // font size = null (default), bg
        // paper = a4, a5, mini
        // orientation = portrait, landscape
        return {
            //fontSize: 'bg',
            paper: 'a4',
            orientation: 'portrait'
        };
    },
    data: function () {
        // Get query params
        //FlowRouter.watchPathChange();
        var q = FlowRouter.current().queryParams;

        Fetcher.setDefault('data',false);
        Fetcher.retrieve('data','acc_ledgerReport',q);

        return Fetcher.get('data');
       /* var callId = JSON.stringify(q);

        var call = Meteor.callAsync(callId, 'acc_ledgerReport', q);

        if (!call.ready()) {
            return false;
        }
        return call.result();*/
    }
});



AutoForm.hooks({
    // Customer
    acc_LedgerReport: {
        onSubmit: function (doc) {
            /*
           doc.accountType=doc.accountType.join(",");
            return doc;*/
            doc.date=doc.date.replace(' ','+');
            doc.date=doc.date.replace(' ','+');
            var path='/acc/ledgerReportGen?branchId='+doc.branchId+'&accountType='+
                doc.accountType+'&chartAccount='+doc.chartAccount
                +'&date='+doc.date+'&exchangeDate='+doc.exchangeDate
                +'&currencyId='+doc.currencyId;
            window.open(path,'_blank');
            return false;
        }
    }
});






