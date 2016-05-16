/**
 * List
 */

//var accountType=ReactiveArray();
Acc.ListForReport = {
    branch: function () {
        var list = [];
        list.push({label: "(Select All)", value: "All"});
        Cpanel.Collection.Branch.find()
            .forEach(function (obj) {
                list.push({label: obj.enName, value: obj._id});
            });

        return list;
    },
    accountType: function (selector) {
        var selector = _.isUndefined(selector) ? {} : selector;
       /* var list = [{label: "(Select All)", value: "All"}];*/
        var list=[];
        Acc.Collection.AccountType.find(selector)
            .forEach(function (obj) {
                list.push({label: obj._id + " | " + obj.name, value: obj._id})
            });
        return list;
        //}
    },
    exchange: function () {
        var list = [];
       var  baseCurrency = Cpanel.Collection.Setting.findOne().baseCurrency;
        list.push({label: "(Select One)", value: ""});
        Cpanel.Collection.Exchange.find({base: baseCurrency},{sort: {exDate: -1}})
            .forEach(function (obj) {
                list.push({label: moment(obj.exDate).format("YYYY-MM-DD") + ' | ' + JSON.stringify(obj.rates), value: obj._id});
            });

        return list;
    },exchangeNBC: function () {
        var list = [];
        list.push({label: "(Select One)", value: ""});
        Acc.Collection.ExchangeNBC.find({base: 'KHR'},{sort: {dateTime: -1}})
            .forEach(function (obj) {
                list.push({label: obj.dateTime + ' | ' + JSON.stringify(obj.rates), value: obj._id});
            });

        return list;
    },
    chartAccountId: function (selector) {
        var selector = _.isUndefined(selector) ? {} : selector;
        var list = [{label: "(Select All)", value: "All"}];
        var accountType=Session.get('accountTypeIdSession');
        if(accountType!=null){
            selector.accountTypeId={$in:accountType};

        Acc.Collection.ChartAccount.find(selector, {sort: {code: 1}})
            .forEach(function (obj) {
                var accountType = Acc.Collection.AccountType.findOne(obj.accountTypeId).name;
                list.push({
                    label: Spacebars.SafeString(Acc.SpaceChar.space(obj.level * 6) + obj.code + " | " + obj.name + " | " + accountType),
                    value: obj._id
                })
            });
            return list;
        }

    }
};
