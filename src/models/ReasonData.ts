export const REASON_REQUEST = {
    configs:[{
    'name': 'travelStatusConfig',
    'whereConditions': [{
      'name': 'channel',
      'value': 'web'
    }]
  }]
}


export interface ReasonData{
    bandConfig: boolean;
    configurations: any;
    corpConfig:boolean;
    defaultConfig: boolean;
    emuConfig: boolean;
    groupconfig:boolean;
    message: string;
    success: boolean;
    txnConfig:boolean;
    userConfig: boolean;
}