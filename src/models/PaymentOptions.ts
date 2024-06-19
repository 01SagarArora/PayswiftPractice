
export enum PaymentMethod {
    'CP' = 'Credit Pool',
    'CC' = 'Credit Card',    
    'DC' = 'Debit Card',
    'NB' = 'Net Banking',
}


export const ButtonType = {
    'CP': { id: 0, label: 'Credit Pool' },
    'CC': { id: 1, label: 'Credit Card' },
    'DC': { id: 1, label: 'Debit Card' },
    'NB': { id: 2, label: 'Net Banking' },
  } as const;
  
  export type ButtonType = typeof ButtonType[keyof typeof ButtonType];

export type mainDataPayment = {
    agentProfileType: string,
    agentPaymentOptions: agentPaymentOptions,
    paxDetails: string
}

export type agentPaymentOptions = {
    paymentOptions: paymentOptions,    
}

export type paymentOptions = {
    personal: string[],
    official: string[]
}