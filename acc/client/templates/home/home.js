var indexTpl = Template.acc_home;
indexTpl.onCreated(function () {
    // SEO
    SEO.set({
        title: 'Home',
        description: 'Description for this page'
    });
});

indexTpl.helpers({
    data: function () {
        var data = ReactiveMethod.call('myMethod');
        return data;
    }
});
