/**
 * chart of Account
 */
Acc.Collection.ChartAccount.permit(['insert', 'update', 'remove'])
    .accIfGeneral()
    .apply();
