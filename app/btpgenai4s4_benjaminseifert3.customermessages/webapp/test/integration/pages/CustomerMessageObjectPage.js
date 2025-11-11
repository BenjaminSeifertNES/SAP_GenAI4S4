sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'btpgenai4s4benjaminseifert3.customermessages',
            componentId: 'CustomerMessageObjectPage',
            contextPath: '/CustomerMessage'
        },
        CustomPageDefinitions
    );
});