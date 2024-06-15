export interface PaymentOptionFeature {
    skipOTP: boolean;
    showStoredCards: boolean;
}

export enum PaymentLabel {
    CC = 'CC',
    CP = 'CP',
    DC = 'DC',
    NB = 'NB'
}

export type Status = "success" | "error" | "loading";

export const PaymentMethod = {
    "CC": 'Credit Card',
    "CP": 'Credit Pool',
    "DC": 'Debit Card',
    "NB": 'Net Banking',
}

export enum PaymentLabelOption {
    'CC' = 'Credit Card',
    'CP' = 'Credit Pool',
    'DC' = 'Debit Card',
    'NB' = 'Net Banking'
}

export interface TripType {
    official: PaymentLabel,
    personal: PaymentLabel,
}


export const TripTypeMethods = {
 
    official: PaymentLabel,
    personal: PaymentLabel,
}

