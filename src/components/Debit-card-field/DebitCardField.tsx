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
    input = input.replace(/\D/g, '');       // Remove non-numeric characters from input    
    let formattedInput = input.replace(/(\d{4})/g, '$1 ').trim();       // Format the input with spaces after every 4 digits
    setCardNumber(formattedInput);        // Update state with formatted input
  };

  const handleOpen = () => {
    setLabelVisible(false);
  };

  const [monthLabelVisible, setLabelVisible] = useState(true);

  return (
    <Box className={cn(styles.form, className)} component="form" sx={{ m: '1rem', width: '49ch', display: 'grid' }}>
      <InputLabel className={cn(styles.head, className)}>Enter Card Details</InputLabel>
      <Box className={cn(styles.cardfield, className)} component="div">
        <InputLabel className={cn(styles.cardnumber1, className)} sx={{ fontWeight: '800', color: 'black', width: "10rem", textAlign: 'end' }}>Card Number</InputLabel>
        <TextField
          required
          type='border-glow'
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
          className={cn(styles.textfield, className)}
          required
        />
      </Box>

      <Box className={cn(styles.main, className)} component="div" sx={{ display: 'grid', gridTemplateAreas: `'label label'` }}>
        <InputLabel className={cn(styles.label3)} sx={{ gridArea: 'label', width: "10rem", justifyContent: 'end' }}>Expiry Date</InputLabel>

        <Box sx={{ display: 'flex' }}>
          {monthLabelVisible && (
            <InputLabel
              id="monthLabel"
              className={cn({ hidden: !monthLabelVisible })}
            >2024
            </InputLabel>
          )}
          <Select
            labelId="monthLabel"
            id="select"
            sx={{
              '& .MuiSelect-icon': { margin: '-1px 4px 0px', },
            }}
            fullWidth
            value={selectedMonth}
            className={cn(styles.month, className)}
            onChange={(e) => setSelectedMonth(e.target.value)}>
            {
              month.map((month) => (
                <MenuItem key={month.id} value={month.id}>
                  {month.label}
                </MenuItem>
              ))
            }
          </Select>
          {monthLabelVisible && (
            <InputLabel
              id="yearLabel"
              className={cn({ hidden: !monthLabelVisible })}
            >2024
            </InputLabel>
          )}
          <Select
            labelId="yearLabel"
            sx={{
              '& .MuiSelect-icon': {
                margin: '-1px 4px 0px',
              },
            }}
            // className={cn(styles.year, className)}
            className={cn(styles.year, { 'label-hidden': !monthLabelVisible }, className)}
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            onOpen={handleOpen}
          >
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
              '& .MuiInputBase-root': { height: '2.4rem', width: '4rem', fontSize: '1rem', },
              '& .MuiInputLabel-root': { top: '-.5rem' },
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