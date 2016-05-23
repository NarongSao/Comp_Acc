/**
 * Collection
 */
Acc.Collection.NetInCome = new Mongo.Collection("acc_netIncome");

/**
 * Schema
 */
Acc.Schema.NetInCome = new SimpleSchema({
    date: {
        type: String,
        label: "Date"
    },
    riel: {
        type: Number,
        decimal: true
    },
    dollar: {
        type: Number,
        decimal: true
    },
    baht: {
        type: Number,
        decimal: true
    },
    endId:{
        type: String
    },
    year: {
        type: String
    },
    branchId: {
        type: String,
        label: "Branch"
    }

});

/**
 * Attach schema
 */
Acc.Collection.NetInCome.attachSchema(Acc.Schema.NetInCome);
