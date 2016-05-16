Meteor.methods({
  acc_journalReport: function(params) {
    var data = {
      title: {},
      header: {},
      content: [{
        index: 'No Result'
      }],
      footer: {}
    };

    var date = s.words(params.date, ' To ');
    var fDate = moment(date[0], 'YYYY-MM-DD').toDate();
    var tDate = moment(date[1], 'YYYY-MM-DD').add(1, 'days').toDate();

    /****** Title *****/
    data.title = Cpanel.Collection.Company.findOne();

    /****** Header *****/
    data.header = params;

    /****** Content *****/
    var content = [];
    var selector = {};



    if (!_.isEmpty(params.date)) {
      selector.journalDate = {
        $gte: moment(fDate).toDate(),
        $lt: moment(tDate).toDate()
      };
    }
    if (params.currencyId != "All") {
      selector.currencyId = params.currencyId;
    }
    if (params.branchId != "All") {
      selector.branchId = params.branchId;
    }
    if (params.chartAccount != "All") {
      selector['transaction.accountDoc._id'] = params.chartAccount;
    }

   if(!_.isArray(params.accountType)){
        var accountTypeList=params.accountType.split(',');
    }else{
      var accountTypeList=params.accountType;
    }
    if (params.accountType != null) {
      selector['transaction.accountDoc.accountTypeId'] = {
        $in: accountTypeList
      };
    }
    var i = 1;
    var grandTotalDollar = 0;
    var grandTotalRiel = 0;
    var grandTotalBath = 0;
    var j = Acc.Collection.Journal.find(selector, {
      sort: {
        journalDate: 1
      }
    }).fetch();
    /*  var j = ReactiveMethod.call('getJournal',selector);*/
    j.forEach(function(c) {
      c.order = i;
      c.journalDateFm = moment(c.journalDate).format('DD/MM/YYYY');
      content.push(c);

      i++;

      if (c.currencyId == "USD") {
        grandTotalDollar += math.round(c.total, 2);
      } else if (c.currencyId == "KHR") {
        grandTotalRiel += math.round(c.total, 2);
      } else if (c.currencyId == "THB") {
        grandTotalBath += math.round(c.total, 2);
      }
    });

    data.grandTotalDollar = grandTotalDollar;
    data.grandTotalRiel = grandTotalRiel;
    data.grandTotalBath = grandTotalBath;

    if (content.length > 0) {
      data.content = content;
    }

    return data;
  }
});
