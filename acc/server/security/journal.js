/**
 * Journal
 */
Acc.Collection.Journal.permit(['insert', 'update', 'remove'])
    .accIfGeneral()
    .apply();
