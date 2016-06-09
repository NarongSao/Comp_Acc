/**
 * Journal
 */
Acc.Collection.DepExpList.permit(['insert', 'update', 'remove'])
    .accIfGeneral()
    .apply();
