using { BTPGenAI4S4_BenjaminSeifert3 as my } from '../db/schema.cds';

@path: '/service/bTPGenAI4S4_BenjaminSeifert3'
@requires: 'authenticated-user'
service bTPGenAI4S4_BenjaminSeifert3Srv {
  @odata.draft.enabled
  entity CustomerMessage as projection on my.CustomerMessage;
}