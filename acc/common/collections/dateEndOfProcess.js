/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.DateEndOfProcess = new Mongo.Collection("accDateEndOfProcess");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.DateEndOfProcess = new SimpleSchema({
    closeDate: {
        type: String,
        label: "Date"
    },
    branchId:{
        type: String,
        label: "Branch"
    }
});

/**
 * Attach schema
 */
Acc.Collection.DateEndOfProcess.attachSchema(Acc.Schema.DateEndOfProcess);
