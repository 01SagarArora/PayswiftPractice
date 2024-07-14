
import React, { FC, ReactElement, useState } from 'react';
import { Box, TextField, InputLabel, Button } from '@mui/material';
import cn from 'classnames';

// import { countrie, state, District } from './../../models/PaymentOptions';
import styles from './Credit-card.module.scss'

interface IMenu {
  className?: string;
}

const CreditCardField2: FC<IMenu> = ({ className }): ReactElement => {
  // const [cardNumber, setCardNumber] = useState('');

  // const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   let input = event.target.value;

  //   // Remove non-numeric characters from input
  //   input = input.replace(/\D/g, '');

  //   // Format the input with spaces after every 4 digits
  //   let formattedInput = input.replace(/(\d{4})/g, '$1 ').trim();

  //   // Update state with formatted input
  //   setCardNumber(formattedInput);
  // };
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
        <InputLabel className={cn(styles.payment1, className)} id="dropdown-label" sx={{ gridArea: 'label'}}>Enter card details</InputLabel>                

        <TextField required className={cn(styles.NameonCard, className)} label="Name on Card" />
        {/* <TextField
          required
          className={cn(styles.cardNumber, className)}
          value={cardNumber}
          onChange={handleCardNumberChange}

          label="Card Number"
          inputProps={{ maxLength: 19 }}
        /> */}
        <TextField type= 'border-glow' />
        <TextField required className={cn(styles.security, className)} label="CVV" inputProps={{ maxLength: 3 }} />
        <TextField required className={cn(styles.Expirydate, className)}
          label="MM/YY"
          value={expiry}
          onChange={handleExpiryChange}
          inputProps={{ maxLength: 5 }} />
      </Box>
      <Box
        className={cn(styles.button, className)}
      >
        <Button className={cn(styles.btn, className)} >
          pay
        </Button>
      </Box>
    
    </>
  );
};

export default CreditCardField2;
