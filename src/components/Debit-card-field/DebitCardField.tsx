import React, { FC, ReactElement, useState } from 'react';
import { Box, InputLabel, Select, MenuItem, Button, TextField } from '@mui/material';
import cn from 'classnames';
import { month, year } from '../../models/PaymentOptions'; // Assuming month and year are imported from models
import styles from './debitcard.module.scss';

interface IMenu {
  className?: string;
}

const DebitCardField: FC<IMenu> = ({ className }): ReactElement => {
  const [cardNumber, setCardNumber] = useState('');
  const defaultMonth = '10';
  const defaultYearId='3';
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
  const [selectedYear, setSelectedYear] = useState(defaultYearId);

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value;
    input = input.replace(/\D/g, '');         
    let formattedInput = input.replace(/(\d{4})/g, '$1 ').trim();       
    setCardNumber(formattedInput);     
  };

  // const [monthLabelVisible, setLabelVisible] = useState(true);
  return (
    <Box className={cn(styles.form, className)} component="form" sx={{ m: '1rem', width: '49ch', display: 'grid',marginLeft:'-2rem' }}>
      <InputLabel className={cn(styles.head, className)}>Enter Card Details</InputLabel>
      <Box className={cn(styles.cardfield, className)} component="div">
        <InputLabel className={cn(styles.cardnumber1, className)} >Card Number</InputLabel>
        <TextField
         type='border-glow'
          required
          className={cn(styles.textfield, className)}
          value={cardNumber}
          onChange={handleCardNumberChange}
          inputProps={{ maxLength: 19 }}
        
        />
       
      </Box>
      <Box className={cn(styles.cardfield, className)} component="div">
        <InputLabel className={cn(styles.nick, className)} >Nickname</InputLabel>
        <TextField
        type='border-glow'
          required
          className={cn(styles.textfield, className)}
        />
        
      </Box>
      <Box className={cn(styles.main, className)} component="div" sx={{ display: 'grid', gridTemplateAreas: `'label label'` }}>
        <InputLabel className={cn(styles.label3)}>Expiry Date</InputLabel>
        <Box sx={{ display: 'flex' }}>
          <Select   sx={{ width: '100%' }} 
            value={selectedMonth }
            className={cn(styles.month, className)}
            onChange={(e) => setSelectedMonth(e.target.value)}>
            {month.map((month) => (
              <MenuItem 
               key={month.id} value={month.id}>
                {month.label}
              </MenuItem>
            ))}
          </Select>
          <Select sx={{width:'100%'}}
            className={cn(styles.year, className)}
            label=""
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            // onOpen={handleOpen}
          >
            {year.map((year) => (
              <MenuItem 
              key={year.id} value={year.id}>
                {year.label}
              </MenuItem>
            ))}
          </Select>
          <TextField
          className={cn(styles.cvv,className)}
            required
            inputProps={{ maxLength: 3 }}
            defaultValue="CVV"
            sx={{
              '& .MuiInputBase-root': { height: '2.4rem',width:'4rem', fontSize:'.8rem',
                '@media (max-width: 35.2em)': {
                  width: '3.1rem',
                  fontSize: '0.7rem',
                },
               },
              '& .MuiInputLabel-root': { top: '-.5rem'},
               }}
          />
        </Box>
      </Box>
      <Box className={cn(styles.button, className)}>
        <Button className={cn(styles.btn, className)}>pay</Button>
      </Box>
    </Box>
  );
};
export default DebitCardField;
