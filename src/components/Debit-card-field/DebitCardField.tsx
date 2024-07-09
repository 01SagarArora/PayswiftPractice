
import React, { FC, ReactElement, useState } from 'react';
import { Box, TextField, Autocomplete, InputLabel } from '@mui/material';
import cn from 'classnames';

import { countrie, state, District } from './../../models/PaymentOptions';
import styles from './debitcard.module.scss';

interface IMenu {
  className?: string;
}

const DebitCardField: FC<IMenu> = ({ className }): ReactElement => {
  const [cardNumber, setCardNumber] = useState('');

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value;

    // Remove non-numeric characters from input
    input = input.replace(/\D/g, '');

    // Format the input with spaces after every 4 digits
    let formattedInput = input.replace(/(\d{4})/g, '$1 ').trim();

    // Update state with formatted input
    setCardNumber(formattedInput);
  };
  // const PaymentForm = () => {
    const [expiry, setExpiry] = useState('');
  
    const handleExpiryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let input = event.target.value;
      
      // Remove non-numeric characters
      input = input.replace(/\D/g, '');
  
      // Format the input as MM/YY
      if (input.length > 2) {
        input = input.slice(0, 2) + '/' + input.slice(2);
      }
  
      // Update state
      setExpiry(input);
    };
  return (
    <>
      <Box
        className={cn(styles.form, className)}
        component="form"
        sx={{
          m: 1,
          width: '45ch',
          padding: '0.5rem',
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          className={cn(styles.BillingAddress, className)}
          component="div"
          sx={{
            'day-month-box': {
              display: 'grid',
              gridTemplateAreas: `
                'label label '
                'day month cvv';
              `,
            },
          }}
        >
          <InputLabel
            className={cn(styles.Billing, className)}
            id="dropdown-label"
            sx={{
              gridArea: 'label',
            }}
          >
            Billing Address
          </InputLabel>

          <Autocomplete
            className={cn(styles.countrie, className)}
            sx={{
              'countrie': {
                display: 'none',
              },
              gridArea: 'countrie',
            }}
            id="combobox"
            options={countrie}
            renderInput={(params) => <TextField {...params} className={cn(styles.countrie, className)} defaultValue="Countrie" label="Countrie" />}
          />
          <Autocomplete
            className={cn(styles.state, className)}
            sx={{
              '& .MuiAutocomplete-popupIndicator': {
                display: 'none',
              },

              gridArea: 'month',
            }}
            id="combobox"
            options={state}
            renderInput={(params) => <TextField {...params} className={cn(styles.state, className)} label="State" />}
            style={{ width: '50%' }}
          />
          <Autocomplete
            className={cn(styles.District, className)}
            sx={{
              '& .MuiAutocomplete-popupIndicator': {
                display: 'inline-flex',
              },
              gridArea: 'day',
            }}
            id="combobox"
            options={District}
            renderInput={(params) => <TextField {...params} className={cn(styles.District, className)}  label="District" />}
          />

          <Box
            className={cn(styles.pincode, className)}
            component="div"
            sx={{
              'day-month-box': {
                display: 'none',
                gridTemplateAreas: `
                  'label',
                `,
              },
            }}
          >
            <TextField required className={cn(styles.pincode, className)}  label="Pincode" variant="outlined" />
          </Box>
          <InputLabel
            className={cn(styles.payment1, className)}
            id="dropdown-label"
            sx={{
              gridArea: 'label',
            }}
          >
            Payment Method
          </InputLabel>
          <TextField required className={cn(styles.NameonCard, className)}  label="Name on Card" />
          <TextField
            required
            className={cn(styles.cardNumber, className)}
            value={cardNumber}
            onChange={handleCardNumberChange}
          
            label="Card Number"
            inputProps={{ maxLength: 19 }}
          />
          <TextField required className={cn(styles.security, className)} label="CVV"  inputProps={{ maxLength: 3 }} />
          <TextField required className={cn(styles.Expirydate, className)}
           label="MM/YY" 
           value={expiry}
           onChange={handleExpiryChange}
           inputProps={{ maxLength: 5 }} />
        </Box>
      </Box>
    </>
  );
};

export default DebitCardField;
