Acc.Collection.Journal = new Mongo.Collection('accJournal');
/*
 Schema
 */
Acc.Schema.Journal = new SimpleSchema({
    journalDate: {
        type: Date,
        label: "Date",
        defaultValue: function () {
            var currentDate = moment(new Date()).format('YYYY-MM-DD');
            return currentDate;
        }
    },
    voucherId: {
        type: String,
        label: "Voucher"

        /*    unique: true,*/
        /* custom: function () {
         if (this.isInsert) {
         var data = Acc.Collection.Journal.find({
         voucherId: this.value
         });
         if (data.count() > 0) {
         return "uniqueVoucher";
         }
         }
         }*/
    },
    currencyId: {
        type: String,
        label: "Currency",
        autoform: {
            type: "select2",
            options: function () {
                return Acc.List.currency(false);
            }
        }
    },
    branchId: {
        type: String,
        label: "Branch"
    },
    memo: {
        type: String,
        label: "Description",
        autoform: {
            type: "textarea"
        }
    },
    splitAccount: {
        type: String,
        label: "splitAccount",
        optional: true
    },
    transaction: {
        type: [Object],
        minCount: 1
    },
    'transaction.$': {
        type: Object
    },
    'transaction.$.account': {
        type: String,
        max: 200,
        label: "Account"
    },
    'transaction.$.dr': {
        type: Number,
        decimal: true,
        blackbox: true
    },
    'transaction.$.cr': {
        type: Number,
        decimal: true,
        blackbox: true
    },
    'transaction.$.drcr': {
        type: Number,
        decimal: true,
        optional: true
    },
    total: {
        type: Number,
        decimal: true,
        optional: true
    },
    endId: {
        type: String,
        optional: true,
        defaultValue: "0"
    },
    fixAssetExpenseId: {
        type: String,
        optional: true,
        defaultValue: "0"
    }
    , closingId: {
        type: String,
        optional: true,
        defaultValue: "0"
    }, transactionAsset: {
        type: [Object],
        optional: true
    },
    'transactionAsset.$': {
        type: Object,
        optional: true
    },
    'transactionAsset.$.account': {
        type: String,
        max: 200,
        label: "Account",
        optional: true
    },
    'transactionAsset.$.value': {
        type: Number,
        decimal: true,
        blackbox: true,
        optional: true
    }, 'transactionAsset.$.life': {
        type: Number,
        blackbox: true,
        optional: true
    },
    'transactionAsset.$.estSalvage': {
        type: Number,
        optional: true,
        blackbox: true
    },
    'transactionAsset.$.code': {
        type: String,
        optional: true,
        blackbox: true
    },
    'transactionAsset.$.percent': {
        type: Number,
        decimal: true,
        optional: true
    },

    'transactionAsset.$.description': {
        type: String,
        optional: true
    }
    /*createdAt: {
     type: Date,
     label: "Create Date",
     autoValue: function () {
     if (this.isInsert) {
     return new Date();
     }
     },
     denyUpdate: true
     },
     updatedAt: {
     type: Date,
     label: "Updated Date",
     autoValue: function () {
     return new Date();
     }
     },
     createdUserId: {
     type: String,
     max: 200,
     label: "Created UserId",
     autoValue: function () {
     if (this.isInsert) {
     return Meteor.user()._id;
     }
     },
     denyUpdate: true
     },
     updatedUserId: {
     type: String,
     max: 200,
     label: "Updated UserId",
     autoValue: function () {
     return Meteor.user()._id;
     }
     }*/

});





Acc.Collection.Journal.attachSchema(Acc.Schema.Journal);

SimpleSchema.messages({
    "uniqueVoucher": "Voucher must be unique."
})



//Sub
Acc.Schema.fixAssetSchema = new SimpleSchema({
    account: {
        type: String,
        max: 200,
        autoform: {
            type: "select2",
            options: function () {
                return Acc.List.fixAssetChatAccount();
            }
        }
    },
    value: {
        type: Number,
        decimal: true,
        optional: true
    }, life: {
        type: Number,
        optional: true
    },
    estSalvage: {
        type: Number,
        optional: true
    },
    code: {
        type: String,
        optional: true
    },
    percent: {
        type: Number,
        decimal: true,
        optional: true
    },
    description: {
        type: String,
        optional: true
    }
});




/*
Acc.Schema.accountSchema = new SimpleSchema({
    tmpAccount: {
        type: String,
        max: 200,
        autoform: {
            type: "universe-select",
            afFieldInput: {
                uniPlaceholder: 'Select One',
                optionsMethod: 'acc.selectOptMethods.account'
            }
        }
    },
    tmpDr: {
        type: Number,
        decimal: true,
        optional: true
    },
    tmpCr: {
        type: Number,
        decimal: true,
        optional: true
    }
});
*/
