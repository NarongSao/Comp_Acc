// Customer
var module = 'Acc';


Acc.Collection.MapFixAsset.before.insert(function (userId, doc) {

    var fixAssetDoc = Acc.Collection.ChartAccount.findOne({_id: doc.fixAsset});
    doc.fixAssetDoc = fixAssetDoc;

    doc.fixAssetCon=fixAssetDoc.code+ " | "+ fixAssetDoc.name;

    var accuFixAssetDoc = Acc.Collection.ChartAccount.findOne({_id: doc.accuFixAsset});
    doc.accuFixAssetDoc = accuFixAssetDoc;

    var fixAssetExpenseDoc = Acc.Collection.ChartAccount.findOne({_id: doc.fixAssetExpense});
    doc.fixAssetExpenseDoc = fixAssetExpenseDoc;


});


Acc.Collection.MapFixAsset.before.update(function (userId, doc, fieldNames,
                                                   modifier, options) {
    var fixAssetDoc = Acc.Collection.ChartAccount.findOne({_id: doc.fixAsset});
    modifier.$set.fixAssetDoc = fixAssetDoc;

    modifier.$set.fixAssetCon=fixAssetDoc.code+ " | "+ fixAssetDoc.name;

    var accuFixAssetDoc = Acc.Collection.ChartAccount.findOne({_id: doc.accuFixAsset});
    modifier.$set.accuFixAssetDoc = accuFixAssetDoc;

    var fixAssetExpenseDoc = Acc.Collection.ChartAccount.findOne({_id: doc.fixAssetExpense});
    modifier.$set.fixAssetExpenseDoc = fixAssetExpenseDoc;

});
