import { FC, ReactElement } from 'react';
import { Box, TextField, Autocomplete, InputLabel } from '@mui/material';
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
        '& > :not(style)': { m: 1, width: '40ch' ,display:"block",padding:"0.5rem"},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required id="outlined-basic" label="Debit Card"
        defaultValue="Card Number" variant="outlined" />
      <TextField required id="outlined-basic" label="Card Holder Name"
        defaultValue="Card Number" variant="outlined" />

        {/* //////////////////date and Month */}
      <Box
       className={cn(styles.date2,className)}
        component='div' 
        sx={{
          'day-month-box': {
            display: 'grid',
            gridTemplateAreas: `
                                'label label'
                                'day month';
                                `,
          },
        }}
      >
 
        <InputLabel
          id="dropdown-label"
          sx={{
            gridArea: 'label',
          }}
        >Select the date
        </InputLabel>
        <Autocomplete
          className={cn(styles.month, className)}
          sx={{
            '& .MuiAutocomplete-popupIndicator': {
              display: 'none',
            },
            gridArea: 'day',
          }}
          id="combobox"
          options={day}
          renderInput={(params) => <TextField {...params} className={cn(styles.month, className)} label="Day" />}
        />
        <Autocomplete
          className={cn(styles.month, className)}
          sx={{
            '& .MuiAutocomplete-popupIndicator': {
              display: 'none',
            },
            gridArea: 'month',
          }} id="combobox"
          options={month}
          renderInput={(params) => <TextField {...params} className={cn(styles.month, className)} label="Month" />}
          style={{ width: '50%' }}
        /> 

        {/* //////////////////CVV */}
      
       
        <Box
        className={cn(styles.cvv, className)}

        component='div'
        sx={{
          'day-month-box': {
            display: 'grid',
            gridTemplateAreas: `
                                'label label'
                                'month  year';
                                `,
          },
        }}
      >
 
        <InputLabel

          sx={{
            gridArea: 'label',
          }}
        >
        </InputLabel>
      <TextField required  label="CVV"
        variant="outlined" />
        </Box>
        </Box>
      
    </Box>
  </>
)

export default CreditCardField
