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
    <Box className={cn(styles.form, className)} component="form" sx={{ m: '1rem', width: '49ch', display: 'grid' }}>
      <InputLabel className={cn(styles.head, className)}>Enter Card Details</InputLabel>

      <Box className={cn(styles.cardfield, className)} component="div">
        <InputLabel className={cn(styles.cardnumber1, className)} sx={{ fontWeight: '800', color: 'black', width: "10rem", textAlign: 'end' }}>Card Number</InputLabel>
        <TextField
          required
          type='border-glow'
          sx={{ '& .MuiInputBase-root': { height: '2.2rem',width:'16rem',  } }}
          className={cn(styles.textfield, className)}
          value={cardNumber}
          onChange={handleCardNumberChange}
          inputProps={{ maxLength: 19 }}
        />
      </Box>

      <Box className={cn(styles.cardfield, className)} component="div">
        <InputLabel className={cn(styles.nick, className)} sx={{ fontWeight: '800', color: 'black', width: "10rem", textAlign: 'end' }}>Nickname</InputLabel>
        <TextField
          type='border-glow'
          sx={{ '& .MuiInputBase-root': { height: '2.2rem',width:'16rem',fontSize:'1rem', } }}
          className={cn(styles.textfield, className)}
          required
        />
      </Box>

      <Box className={cn(styles.main, className)} component="div" sx={{ display: 'grid', gridTemplateAreas: `'label label'` }}>
        <InputLabel className={cn(styles.label3)} sx={{ gridArea: 'label', width: "10rem", justifyContent: 'end' }}>Expiry Date</InputLabel>

        <Box sx={{ display: 'flex' }}>
          <Select sx={{'& .MuiSelect-icon': {margin:'-1px 2px 0px',width:'1.3ewm', },
                       }}
            value={selectedMonth}
            className={cn(styles.month, className)}
            label="Month"
            fullWidth
            onChange={(e) => setSelectedMonth(e.target.value)}>
            {month.map((month) => (
              <MenuItem  key={month.id} value={month.id}>
                {month.label}
              </MenuItem>
            ))}
          </Select>
          <Select
          sx={{'& .MuiSelect-icon': {margin: '-1px 4px 0px',width:'1.3rem'}}}
            className={cn(styles.year, className)}
            label=""
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}>
            {year.map((year) => (
              <MenuItem 
              
              key={year.id} value={year.id}>
                {year.label}
              </MenuItem>
            ))}
          </Select>
          <TextField
            required
            inputProps={{ maxLength: 3 }}
            defaultValue="CVV"
            sx={{
              width: '4rem',
              marginLeft: '.5rem',
             
              backgroundColor: "rgba(223, 220, 220, 0.37)",
              borderRadius: '10px',
              boxShadow: '0rem 0rem .2rem rgba(#504f4f, 0.5)',
              '& .MuiInputBase-root': { height: '2.4rem',width:'4rem', fontSize:'1rem', },
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
