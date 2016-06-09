/**
 * Journal
 */
Acc.Collection.FixAssetExpense.permit(['insert', 'update', 'remove'])
    .accIfGeneral()
    .apply();
