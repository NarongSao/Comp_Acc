/**
 * chart of Account
 */
Acc.Collection.MapClosing.permit(['insert', 'update', 'remove'])
  .accIfGeneral()
  .apply();
