/**
 * CloseChartAccount
 */
Acc.Collection.CloseChartAccount.permit(['insert', 'update', 'remove'])
    .accIfGeneral()
    .apply();
