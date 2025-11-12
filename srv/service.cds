using { S4HCP_ServiceOrder_Odata } from './external/S4HCP_ServiceOrder_Odata.cds';

using { BTPGenAI4S4_BenjaminSeifert3 as my } from '../db/schema.cds';

@path : '/service/bTPGenAI4S4_BenjaminSeifert3'
service bTPGenAI4S4_BenjaminSeifert3Srv
{
    @odata.draft.enabled
    entity CustomerMessage as
        projection on my.CustomerMessage;

    @cds.redirection.target
    entity A_ServiceOrder as
        projection on S4HCP_ServiceOrder_Odata.A_ServiceOrder
        {
            ServiceOrder,
            ServiceOrderDescription
        };
    
    @odata.draft.enabled
    entity ProductFAQ as 
        projection on my.ProductFAQ
        {
            ID,
            issue,
            question,
            answer
        };
}

annotate bTPGenAI4S4_BenjaminSeifert3Srv with @requires :
[
    'authenticated-user'
];
