export const PaymentMethod = {
    "CP": { id: 0, label: 'Credit Pool' },
    'CC': { id: 1, label: 'Credit Card' },
    'DC': { id: 2, label: 'Debit Card' },
    'NB': { id: 3, label: 'Net Banking' },
};
  
export type PaymentMethod = typeof PaymentMethod[keyof typeof PaymentMethod];

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