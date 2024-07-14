import { FC, ReactElement, useState } from 'react';
import { Box, InputLabel, Select, MenuItem, Button } from '@mui/material';
import cn from 'classnames';
import { TextField } from '@mui/material';
// import { styled } from '@mui/system';

// import ThemeProvider from '@mui/material/styles/ThemeProvider';
// import { theme } from './../../Theme/theme';


import { month, year } from './../../models/PaymentOptions'; // Assuming month and year are imported from models
import styles from './Credit-card.module.scss';

interface IMenu {
  className?: string;
}


// const CustomTextField = styled(TextField)(({ theme }) => ({
//   '& .MuiOutlinedInput-root': {
//     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//       borderColor: theme.palette.fieldset.borderColor,
//     },
//   },
// }));

const CreditCardField2: FC<IMenu> = ({ className }): ReactElement => {
  // const [cardNumber, setCardNumber] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   let input = event.target.value;

  //   // Remove non-numeric characters from input
  //   input = input.replace(/\D/g, '');

  //   // Format the input with spaces after every 4 digits
  //   let formattedInput = input.replace(/(\d{4})/g, '$1 ').trim();

  //   // Update state with formatted input
  //   setCardNumber(formattedInput);
  // };


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
          className={cn(styles.cardfield, className)}
          component="div"
        >
          <InputLabel className={cn(styles.cardnumber1, className)} sx={{ fontWeight: '800', color: 'black', width: "10rem", textAlign: 'end', }}>Card Number</InputLabel>
          <TextField 
            type='border-glow'             
          />
          
        </Box>

        <Box
          className={cn(styles.cardfield, className)}
          component="div"
          sx={{
            display: 'none',
            gridTemplateAreas: `'label',`,
          }}
        >

          <InputLabel className={cn(styles.nick, className)} sx={{ gridArea: 'NickName', fontWeight: '800', color: 'black', width: "10rem", textAlign: 'end' }}>Nickname</InputLabel>
          <input required className={cn(styles.textfield, className)} />
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
          <InputLabel className={cn(styles.label3)} sx={{ gridArea: 'label', width: "10rem", justifyContent: 'end', }}>
            Expiry Date
          </InputLabel>

          <Box
            className={cn(styles.month1, className)}
          >
            <Select
              value={selectedMonth}
              className={cn(styles.month, className)}
              label="Month"
              fullWidth
              onChange={(e) => setSelectedMonth(e.target.value)}>
              {month.map((month) => (
                <MenuItem key={month.id} value={month.id}>
                  {month.label}
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Box
            className={cn(styles.year1, className)}
          >

            <Select
              className={cn(styles.year, className)}
              label=""
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}>


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
              maxLength={3}
              placeholder='CVV'
            // Set the maxLength attribute directly on the input element
            />
          </Box>

        </Box>

        <Box
          className={cn(styles.button, className)}
        >
          <Button className={cn(styles.btn, className)} >
            pay
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreditCardField2;
