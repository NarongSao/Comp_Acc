/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.DepExpList = new Mongo.Collection("accDepExpList");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.DepExpList = new SimpleSchema({

    date: {
        type: Date,
        label: "Date",
        defaultValue: function () {
            var currentDate = moment(new Date()).format('YYYY-MM-DD');
            return currentDate;
        }
    },
    branchId: {
        type: String,
        label: "Branch"
    },
    currencyId: {
        type: String,
        label: "Currency"
    },
    account: {
        type: String,
        label: "Account"
    },
    amount: {
        type: Number,
        decimal: true,
        label: "Amount"
    }
    , life: {
        type: Number,
        label: "Life",
        optional: true
    }
    , transactionAsset: {
        type: [Object]
    },
    'transactionAsset.$': {
        type: Object
    },
    'transactionAsset.$.year': {
        type: Number,
        blackbox: true
    },
    'transactionAsset.$.perMonth': {
        type: Number,
        decimal: true,
        blackbox: true
    }, 'transactionAsset.$.perYear': {
        type: Number,
        decimal: true,
        blackbox: true
    }, 'transactionAsset.$.month': {
        type: Number,
        blackbox: true
    },
    'transactionAsset.$.status': {
        type: Boolean,
        defaultValue: false
    },
    isDep: {
        type: Boolean,
        defaultValue: false
    },
    journalId: {
        type: String
    }
});
/**
 * Attach schema
 */
Acc.Collection.DepExpList.attachSchema(Acc.Schema.DepExpList);