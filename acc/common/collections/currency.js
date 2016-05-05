/**
 * Collection
 */
Acc.Collection.Currency = new Mongo.Collection("acc_currency");

/**
 * Schema
 */
Acc.Schema.Currency = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        unique: true
    },
    symbol: {
        type: String,
        label: "Symbol",
        unique: true
    },
    num: {
        type: String,
        label: "Num",
        unique: true
    }
});

/**
 * Attach schema
 */
Acc.Collection.Currency.attachSchema(Acc.Schema.Currency);
