import { FC, ReactElement } from 'react';
import { Box, TextField, Autocomplete, InputLabel,Button } from '@mui/material';
import cn from 'classnames';

import { month, day} from './../../models/PaymentOptions'
import styles from './creditCard.module.scss'


interface IMenu {
  className?: string;
}


const CreditCardField: FC<IMenu> = ({ className }): ReactElement => (
  <>
    <Box
      className={(styles.form1, className)}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '37ch' ,display:"flex",padding:"0.5rem",},
      }}
      noValidate
      autoComplete="off">
      <TextField required id="outlined-basic" label="Debit Card"
        defaultValue="Card Number" variant="outlined" />
      <TextField required id="outlined-basic" label="Card Holder Name"
        defaultValue="Card Number" variant="outlined" />
        {/* //////////////////date and Month */}
        <InputLabel
        className={cn(styles.selectLabel,className)}
          id="dropdown-label"
          
        >Select the date
        </InputLabel>
      <Box
       className={cn(styles.date2,className)}
        component='div' 
        sx={{'day-month-cvv': {
            gridTemplateAreas: `
                                'label label '
                                'day month cvv'; `,},}}
      >
     
        <Autocomplete
          className={cn(styles.day, className)}
          sx={{
            ' & .MuiInputBase-root': { height: '3rem',width:'4.5rem', fontSize:'.9rem',},
            '@media (max-width: 35.2em)': {fontSize: '0.7rem',},
            '& .MuiAutocomplete-popupIndicator': {
              display: 'none',
            },
            gridArea: 'day',
          }}
          id="combobox"
          options={day}
          renderInput={(params) => <TextField {...params} className={cn(styles.day, className)} label="Day" />}
        />
        <Autocomplete
          className={cn(styles.month, className)}
          sx={{
            '& .MuiAutocomplete-popupIndicator': {        
              display: 'none',
            },
           ' & .MuiInputBase-root': { height: '3rem',width:'4.5rem', fontSize:'.9rem',
            '@media (max-width: 35.2em)': {fontSize: '0.7rem',}
            },}} 
          id="combobox"
          options={month}
          renderInput={(params) => <TextField {...params} className={cn(styles.month, className)} label="Month" />}
          style={{ width: '50%' }}
        /> 
        {/* //////////////////CVV */}
      <TextField required
      className={cn(styles.cvv,className)}
            inputProps={{ maxLength: 3 }}
            defaultValue="CVV"
            sx={{
              '& .MuiInputBase-root': { height: '3rem',width:'4.5rem', fontSize:'.9rem',
                '@media (max-width: 35.2em)': {
                  fontSize: '0.7rem',
                },
               },
              '& .MuiInputLabel-root': { top: '-.5rem'},
               }} />
        </Box>
        <Box
    className={cn(styles.button,className)}>
      <Button className={cn(styles.btn,className)} >
        pay
      </Button>
    </Box>
    </Box>
  </>
)

export default CreditCardField
