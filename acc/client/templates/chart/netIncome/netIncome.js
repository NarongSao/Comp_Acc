var indexTpl = Template.acc_chartNetIncome;
var myNewChart=null;
Tracker.autorun(function () {
    if (Session.get('chart')) {
        drawChart(Session.get('chart'));
    }
});

indexTpl.onRendered(function () {
    if (Session.get('chart') === undefined) {
        let selector = {};
        selector.year = moment().format("YYYY");
        selector.currency = "usd";
        Session.set('currency', 'usd');
        Meteor.call('getNetIncome', selector, function (err, result) {
            Session.set('chart', result);
        });
    }
    for (i = new Date().getFullYear(); i > 1900; i--) {
        $('#yearpicker').append($('<option />').val(i).html(i));
    }

});

indexTpl.events({
    'click #usd': function () {
        let selector = {};
        let year = $("#yearpicker").val();
        selector.year = year;
        selector.currency = "usd";
        Session.set('currency', 'usd');
        Meteor.call('getNetIncome', selector, function (err, result) {
            Session.set('chart',result);
        });
    }, 'click #khr': function () {
        debugger;
        let selector = {};
        let year = $("#yearpicker").val();
        selector.year = year;
        selector.currency = "khr";
        Session.set('currency', 'khr');
        Meteor.call('getNetIncome', selector, function (err, result) {
            Session.set('chart',result);
        });
    }, 'click #baht': function () {
        let selector = {};
        let year = $("#yearpicker").val();
        selector.year = year;
        selector.currency = "baht";
        Session.set('currency', 'baht');
        Meteor.call('getNetIncome', selector, function (err, result) {
            Session.set('chart',result);
        });
    }, 'change #yearpicker': function () {
        let selector = {};
        let year = $("#yearpicker").val();
        selector.year = year;
        let currency = Session.get('currency');
        selector.currency = currency;
        Meteor.call('getNetIncome', selector, function (err, result) {
            Session.set('chart',result);
        });
    }
})


indexTpl.onDestroyed(function () {
    Session.set('chart', undefined);
});


function drawChart(data) {
    let m_data=data;

    $('#bar-chart-container').html(''); //remove canvas from container
    $('#bar-chart-container').html('<canvas id="myChart" height="400" width="900"></canvas>');

    Meteor.setTimeout(function () {
        var ctx = $("#myChart").get(0).getContext("2d");
        myNewChart = new Chart(ctx, {});
        new Chart(ctx).Bar(m_data, {
            scaleBeginAtZero: false,
            scaleLabel: "<%=numeral(value).format('0,0.00')%>",
            tooltipTemplate: "<%= numeral(value).format('0,0.00') %>"
        });
    },300);

}

