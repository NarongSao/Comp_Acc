/**
 * Module
 */
Module = typeof Module === 'undefined' ? {} : Module;
Meteor.isClient && Template.registerHelper('Module', Module);

Module.Acc = {
    name: 'Accounting System',
    version: '0.0.1',
    summary: 'Accounting Management System is ...',
    roles: [
        'admin',
        'general',
        'reporter'
    ],

    dump: {
        setting: [
            'accAccountType',
            'accChartAccount',
            'accChartAccountNBC',
            'acc_currency',
            'acc_exchangeNBC',
            'accMapNBCBalance',
            'accMapNBCIncome',
            'accMapClosing',
            'cpanel_exchange'
        ],
        data: [
            'accJournal',
            'accCloseChartAccount',
            'accDateEndOfProcess',
            'acc_netIncome',
            'accClosing',


        ]
    }
};
