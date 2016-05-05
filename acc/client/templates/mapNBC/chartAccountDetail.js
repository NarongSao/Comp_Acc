// Declare template
var chartAccountDetailTPL = Template.acc_chartAccountDetail;

// Items state
/*itemsState = new ReactiveList();*/

/**
 * JournalDetail
 */
chartAccountDetailTPL.onRendered(function () {
    $('[name="tmpAccount"]').select2();
});
chartAccountDetailTPL.helpers({
    chartAccount: function () {
        var listChartAccount = [];
        Acc.Collection.ChartAccount.find({}, {sort: {code: 1}})
            .forEach(function (obj) {
                var accountType = Acc.Collection.AccountType.findOne(obj.accountTypeId).name;
                listChartAccount.push({
                    _id: obj._id,
                    name: obj.name,
                    code: Spacebars.SafeString(Acc.SpaceChar.space(obj.level * 6) + obj.code),
                    accountType: accountType
                });
            });
        return listChartAccount;
    },
    detail: function () {
        return itemsState.fetch();
    }
});

chartAccountDetailTPL.events({
    'click .addItem': function (e, t) {
        var detail = {};
        var index = 0;
        detail.account = (t.$('[name="tmpAccount"]').val()).split('&nbsp;')[(t.$('[name="tmpAccount"]').val()).split('&nbsp;').length - 1];

        if (itemsState.length() > 0) {
            // Check exist
            var findExist = itemsState.get(detail.account);
            // Update exist
            if (!_.isUndefined(findExist)) {
                return false;
            } else { // Cal index to add new
                index = itemsState.last().index + 1;

                detail.index = index;
                detail.indexAccount = 'transaction.' + index + '.account';
                itemsState.insert(detail.account, detail);
            }
        } else {
            detail.index = index;
            detail.indexAccount = 'transaction.' + index + '.account';
            itemsState.insert(detail.account, detail);
        }
    },
    'click .removeItem': function (e, t) {
        var self = this;
        itemsState.remove(self.account);
    }
});




