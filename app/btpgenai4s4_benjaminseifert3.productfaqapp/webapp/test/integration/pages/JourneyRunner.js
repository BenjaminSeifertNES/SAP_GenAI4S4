sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"btpgenai4s4benjaminseifert3/productfaqapp/test/integration/pages/ProductFAQList",
	"btpgenai4s4benjaminseifert3/productfaqapp/test/integration/pages/ProductFAQObjectPage"
], function (JourneyRunner, ProductFAQList, ProductFAQObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('btpgenai4s4benjaminseifert3/productfaqapp') + '/test/flpSandbox.html#btpgenai4s4benjaminseifert3pro-tile',
        pages: {
			onTheProductFAQList: ProductFAQList,
			onTheProductFAQObjectPage: ProductFAQObjectPage
        },
        async: true
    });

    return runner;
});

