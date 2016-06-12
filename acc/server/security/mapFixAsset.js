/**
 * chart of Account
 */
Acc.Collection.MapFixAsset.permit(['insert', 'update', 'remove'])
  .accIfGeneral()
  .apply();
