import React, { FC, ReactElement, useState } from 'react';
import { Box,  InputLabel, Select, MenuItem } from '@mui/material';
import cn from 'classnames';

import { month, year } from './../../models/PaymentOptions'; // Assuming month and year are imported from models
import styles from './Credit-card.module.scss';

interface IMenu {
  className?: string;
}

const CreditCardField2: FC<IMenu> = ({ className }): ReactElement => {
  const [cardNumber, setCardNumber] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value;

    // Remove non-numeric characters from input
    input = input.replace(/\D/g, '');

    // Format the input with spaces after every 4 digits
    let formattedInput = input.replace(/(\d{4})/g, '$1 ').trim();

    // Update state with formatted input
    setCardNumber(formattedInput);
  };


  return (
    <>
      <InputLabel className={cn(styles.head, className)}>Enter Card Details</InputLabel>
      <Box
        className={cn(styles.form, className)}
        component="form"
        sx={{
          m: '1rem',
          width: '49ch',
          display: 'grid',
        }}
      >
        <Box
          className={cn(styles.cardnumber, className)}
          component="div"
          sx={{
            'day-month-box': {
                border:"2px solid red",
                backgroundColor:"red",
              gridTemplateAreas: `'label',`,
            },
          }}
        >
          <InputLabel sx={{ gridArea: 'Card Number' }} className={cn(styles.cardnumber1, className)}>Card Number</InputLabel>
          <input
            required

            className={cn(styles.cardnumber2, className)}
            value={cardNumber}
            onChange={handleCardNumberChange}
             maxLength= {19}
          />
        </Box>

        <Box
          className={cn(styles.Nickname, className)}
          component="div"
          sx={{
            
              display: 'none',
             
              gridTemplateAreas: `'label',`,
        
          }}
        >
          <InputLabel className={cn(styles.nick,className)} sx={{ gridArea: 'NickName',  }}>Nickname</InputLabel>
          <input required  className={cn(styles.Nickname2,className)} />
        </Box>

        <Box
          className={cn(styles.main, className)}
          component="div"
          sx={{
            'day-month-box': {
              display: 'grid',
              gridTemplateAreas: `'label label';`,
            },
          }}
        >
          <InputLabel className={cn(styles.label3)} sx={{ gridArea: 'label' }}>
            Expiry Date
          </InputLabel>

          <Box 
          className={cn(styles.month1,className)}
        //   sx={{ gridArea: 'month' }}
        >
            <Select
              value={selectedMonth}
              className={cn(styles.month, className)}
              label="Month"
              fullWidth
              onChange={(e)=>setSelectedMonth(e.target.value)}>
              {month.map((month) => (
                <MenuItem key={month.id} value={month.id}>
                  {month.label}
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Box
          className={cn(styles.year1,className)}
        //   sx={{ gridArea: 'year' }}
          >
           
            <Select
              className={cn(styles.year, className)}
              label=""
              fullWidth
            value={selectedYear} 
            onChange={(e)=>setSelectedYear(e.target.value)}>

         
              {year.map((year) => (
                <MenuItem key={year.id} value={year.id}>
                  {year.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box className={cn(styles.cvv1, className)}>
       <input
         required
         className={cn(styles.cvv, className)}
         maxLength={3} // Set the maxLength attribute directly on the input element
        />
    </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreditCardField2;
