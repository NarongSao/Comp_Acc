var fixAssetDepTpl = Template.acc_fixAssetDep,
    fixAssetListTPL=Template.acc_fixAssetDepList;
    fixAssetDepTpl.onRendered(function () {
    createNewAlertify("fixAssetDep");
    // SEO
    SEO.set({
        title: 'Fix Asset List',
        description: 'Description for this page'
    });
})

fixAssetDepTpl.helpers({
    selector: function () {
        return {branchId: Session.get("currentBranch")};
    }
})


fixAssetDepTpl.events({
    'click .depList': function (e, t) {
        var self = this;

        var params={};
        var queryParams={};

        queryParams.branchId=Session.get("currentBranch");
        queryParams.journalId=self.journalId;

        var path = FlowRouter.path("acc.fixAssetDepList", params, queryParams);

        window.open(path,"_blank");

    }
});


fixAssetListTPL.helpers({
    options: function () {
        // font size = null (default), bg
        // paper = a4, a5, mini
        // orientation = portrait, landscape
        return {
            //fontSize: 'bg',
            paper: 'a4',
            orientation: 'portrait'
        };
    },
    data: function () {
        // Get query params
        //FlowRouter.watchPathChange();
        var q = FlowRouter.current().queryParams;

        Fetcher.setDefault('data',false);
        Fetcher.retrieve('data','acc_fixAssetDepList',q);

        return Fetcher.get('data');
    }
})