/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.AccountType = new Mongo.Collection("accAccountType");

/**
 * Schema
 *
 * @type {SimpleSchema}
 */
Acc.Schema.AccountType = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        unique: true,
        max: 200
    }
});

/**
 * Attach schema
 */
Acc.Collection.AccountType.attachSchema(Acc.Schema.AccountType);
