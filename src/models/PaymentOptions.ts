export const PaymentMethod =  {
    'CC': { id: 0, label: 'Credit Card' },
    "CP": { id: 1, label: 'Credit Pool' },
    'DC': { id: 2, label: 'Debit Card' },
    'NB': { id: 3, label: 'Net Banking' },
}
  
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

export const month = [
    { label: '01', id: 1 },
    { label: '02', id: 2 },
    { label: '03', id: 3 },
    { label: '04', id: 4 },
    { label: '05', id: 5 },
    { label: '06', id: 6 },
    { label: '07', id: 7 },
    { label: '08', id: 8 },
    { label: '09', id: 9 },
    { label: '10', id: 10 },
    { label: '11', id: 11 },
    { label: '12', id: 12 }
]

export const day = [
    { label: '01', id: 1 },
    { label: '02', id: 2 },
    { label: '03', id: 3 },
    { label: '04', id: 4 },
    { label: '05', id: 5 },
    { label: '06', id: 6 },
    { label: '07', id: 7 },
    { label: '08', id: 8 },
    { label: '09', id: 9 },
    { label: '10', id: 10 },
    { label: '11', id: 11 },
    { label: '12', id: 12 },
    { label: '13', id: 13 },
    { label: '14', id: 14 },
    { label: '15', id: 15 },
    { label: '16', id: 16 },
    { label: '17', id: 17 },
    { label: '18', id: 18 },
    { label: '19', id: 19 },
    { label: '20', id: 20 },
    { label: '21', id: 21 },
    { label: '22', id: 22 },
    { label: '23', id: 23 },
    { label: '24', id: 24 },
    { label: '25', id: 25 },
    { label: '26', id: 26 },
    { label: '27', id: 27 },
    { label: '28', id: 28 },
    { label: '29', id: 29 },
    { label: '30', id: 30 },
    { label: '31', id: 31 }    
]

export const year = [
    { label: '2024', id: 1 },
    { label: '2025', id: 2 },
    { label: '2026', id: 3 },
    { label: '2027', id: 4 },
    { label: '2028', id: 5 },
    { label: '2029', id: 6 },
    { label: '2030', id: 7 },
    { label: '2031', id: 8 },
    { label: '2032', id: 9 },
    { label: '2033', id: 10 },
    { label: '2034', id: 11 },
    { label: '2035', id: 12 },
    { label: '2036', id: 13 },
    { label: '2037', id: 14 },
    { label: '2038', id: 15 },
    { label: '2039', id: 16 }
]
export const countrie = [
    { label: 'India', id: 1 },
    { label: 'United States', id: 2 },
    { label: 'Canada', id: 3 },
    { label: 'United Kingdom', id: 4 },
    { label: 'Germany', id: 5 },
    { label: 'France', id: 6 },
    { label: 'Italy', id: 7 },
    { label: 'Japan', id: 8 },
    { label: 'Australia', id: 9 },
    { label: 'Brazil', id: 10 },
    { label: 'China', id: 11 },
    { label: 'Russia', id: 12 },
    { label: 'South Africa', id: 13 },
    { label: 'Mexico', id: 14 },
 
      ];
 export const state = [
       
 { label: 'Andhra Pradesh', id: 1},
 { label: 'Arunachal Pradesh', id: 2 },
 { label: 'Assam', id: 3 },
 { label: 'Bihar', id:4 },
 { label: 'Chhattisgarh', id: 5 },
 { label: 'Goa', id: 6 },
 { label: 'Gujarat', id: 7 },
 { label: 'Haryana', id: 8 },
 { label: 'Himachal Pradesh', id:9 },
 { label: 'Jharkhand', id: 10 },
 { label: 'Karnataka', id: 11 },
 { label: 'Kerala', id: 12 },
 { label: 'Madhya Pradesh', id: 13 },
 { label: 'Maharashtra', id: 14 },
          ];
          
     
export const District = [
 { label: 'Andhra Pradesh', id: 1},
 { label: 'Arunachal Pradesh', id: 2 },
 { label: 'Faridabad', id: 3 },
 { label: 'Bihar', id:4 },
 { label: 'Chhattisgarh', id: 5 },
 { label: 'Goa', id: 6 },
 { label: 'Gujarat', id: 7 },
 { label: 'Gochhi', id: 8 },
 { label: 'Himachal Pradesh', id:9 },
 { label: 'Jharkhand', id: 10 },
 { label: 'Karnataka', id: 11 },
 { label: 'Kerala', id: 12 },
 { label: 'Madhya Pradesh', id: 13 },
 { label: 'Maharashtra', id: 14 },
          ];