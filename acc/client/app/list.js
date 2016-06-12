/**
 * List
 */
Acc.List = {
    gender: function (selectOne) {
        var list = [];
        if (!_.isEqual(selectOne, false)) {
            list.push({label: "(Select One)", value: ""});
        }
        list.push({label: 'Male', value: 'M'});
        list.push({label: 'Female', value: 'F'});

        return list;
    },
    address: function (selectOne) {
        var list = [];
        if (!_.isEqual(selectOne, false)) {
            list.push({label: "(Select One)", value: ""});
        }

        Acc.Collection.Address.find()
            .forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.name, value: obj._id});
            });

        return list;
    },
    depType: function () {
        var typeArr = [];
        typeArr.push({
            value: '',
            label: "(Select One)"
        }, {
            value: '01: Straight Line',
            label: "01: Straight Line"
        }, {
            value: '02: Sum Of Year Digits',
            label: "02: Sum Of Year Digits"
        }, {
            value: '03: Declining Balance',
            label: "03: Declining Balance"
        })
        return typeArr;
    }, fixAssetChatAccount: function () {
        var listChartAccount = [];
        Acc.Collection.ChartAccount.find({accountTypeId: '11'}, {sort: {code: 1}})
            .forEach(function (obj) {
                listChartAccount.push({
                    label: Spacebars.SafeString(Acc.SpaceChar.space(obj.level * 6) + obj.code + " | " + obj.name),
                    value:  obj.code + " | " + obj.name
                })
            });
        return listChartAccount;
    }, fixAssetList: function () {
        var listChartAccount = [{label: "(Select One)", value: ""}];
        Acc.Collection.ChartAccount.find({accountTypeId: '11'}, {sort: {code: 1}})
            .forEach(function (obj) {
                listChartAccount.push({
                    label: Spacebars.SafeString(Acc.SpaceChar.space(obj.level * 6) + obj.code + " | " + obj.name),
                    value: obj._id
                })
            });
        return listChartAccount;
    },fixAssetExpenseList: function () {
        var listChartAccount = [{label: "(Select One)", value: ""}];
        Acc.Collection.ChartAccount.find({accountTypeId: '50'}, {sort: {code: 1}})
            .forEach(function (obj) {
                listChartAccount.push({
                    label: Spacebars.SafeString(Acc.SpaceChar.space(obj.level * 6) + obj.code + " | " + obj.name),
                    value:  obj._id
                })
            });
        return listChartAccount;
    },
    parent: function (selector) {
        var selector = _.isUndefined(selector) ? {} : selector;
        var list = [{label: "(Select One)", value: ""}];
        Acc.Collection.ChartAccount.find(selector, {sort: {code: 1}})
            .forEach(function (obj) {
                var accountType = Acc.Collection.AccountType.findOne(obj.accountTypeId).name;
                list.push({
                    label: Spacebars.SafeString(Acc.SpaceChar.space(obj.level * 6) + obj.code + " | " + obj.name + "--" + accountType),
                    value: obj._id
                })
            });
        return list;
    },
    accountType: function (selector) {
        var selector = _.isUndefined(selector) ? {} : selector;
        var list = [{label: "(Select One)", value: ""}];
        Acc.Collection.AccountType.find(selector)
            .forEach(function (obj) {
                list.push({label: obj._id + " | " + obj.name, value: obj._id})
            });
        return list;
        //}
    },

    invoiceType: function (selectAll) {
        var list = [];
        if (!_.isEqual(selectAll, false)) {
            list.push({label: "(Select All)", value: "All"});
        }
        if (_.isEqual(selectAll, false)) {
            list.push({label: "(Select One)", value: ""});
        }
        Acc.Collection.InvoiceType.find()
            .forEach(function (obj) {
                list.push({label: obj._id + " | " + obj.name, value: obj._id})
            });
        return list;
    },
    chartAccountId: function (selector) {

        var selector = _.isUndefined(selector) ? {} : selector;
        var list = [{label: "(Select One)", value: ""}];
        Acc.Collection.ChartAccount.find(selector, {sort: {code: 1}})
            .forEach(function (obj) {
                var accountType = Acc.Collection.AccountType.findOne(obj.accountTypeId).name;
                list.push({
                    label: Spacebars.SafeString(Acc.SpaceChar.space(obj.level * 6) + obj.code + " | " + obj.name + " | " + accountType),
                    value: obj._id
                })
            });
        return list;
    }, chartAccountNBC: function (selector) {
        var selector = _.isUndefined(selector) ? {} : selector;
        var list = [{label: "(Select One)", value: ""}];
        Acc.Collection.ChartAccountNBC.find(selector, {sort: {code: 1}})
            .forEach(function (obj) {
                list.push({
                    label: obj.code + " | " + obj.name,
                    value: obj._id
                })
            });
        return list;
    }, chartAccountNBCKH: function (selector) {
        var selector = _.isUndefined(selector) ? {} : selector;
        var list = [{label: "(Select One)", value: ""}];
        Acc.Collection.ChartAccountNBCKH.find(selector, {sort: {code: 1}})
            .forEach(function (obj) {
                list.push({
                    label: obj.code + " | " + obj.name,
                    value: obj._id
                })
            });
        return list;
    },
    currency: function (selectAll) {
        var list = [];
        if (!_.isEqual(selectAll, false)) {
            list.push({label: "(Select All)", value: "All"});
        }
        if (_.isEqual(selectAll, false)) {
            list.push({label: "(Select One)", value: ""});
        }
        Acc.Collection.Currency.find()
            .forEach(function (obj) {
                list.push({label: obj._id, value: obj._id});
            });
        return list;
    }
    ,
    currencyClosing: function () {
        var list = [];
        list.push({label: "(Select One)", value: ""});
        var currencyBase = Cpanel.Collection.Setting.findOne().baseCurrency;
        Acc.Collection.Currency.find({_id: {$not: currencyBase}})
            .forEach(function (obj) {
                list.push({label: obj._id, value: obj._id});
            });
        return list;
    }, branchForUser: function (selectOne, userId) {
        var list = [];
        if (!_.isEqual(selectOne, false)) {
            list.push({label: "All", value: ""});
        }
        var userId = _.isUndefined(userId) ? Meteor.userId() : userId;
        Meteor.users.findOne(userId).rolesBranch
            .forEach(function (branch) {
                var label = Cpanel.Collection.Branch.findOne(branch).enName;
                list.push({label: label, value: branch});
            });
        return list;
    },
    backupAndRestoreTypes: function () {
        return [
            {value: '', label: 'Select One'},
            {value: 'Setting', label: 'Setting'},
            {value: 'Default', label: 'Default'},
            {value: 'Setting,Default', label: 'Setting And Default'}
        ];
    }
};
