sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"btpgenai4s4benjaminseifert3/customermessages/test/integration/pages/CustomerMessageList",
	"btpgenai4s4benjaminseifert3/customermessages/test/integration/pages/CustomerMessageObjectPage"
], function (JourneyRunner, CustomerMessageList, CustomerMessageObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('btpgenai4s4benjaminseifert3/customermessages') + '/test/flpSandbox.html#btpgenai4s4benjaminseifert3cus-tile',
        pages: {
			onTheCustomerMessageList: CustomerMessageList,
			onTheCustomerMessageObjectPage: CustomerMessageObjectPage
        },
        async: true
    });

    return runner;
});

