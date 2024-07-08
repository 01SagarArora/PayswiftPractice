import { FC, ReactElement } from 'react';
import { Box, TextField, Autocomplete, InputLabel } from '@mui/material';
import cn from 'classnames';

import {countrie, state,District} from './../../models/PaymentOptions'
import styles from './debitcard.module.scss'

interface IMenu {
  className?: string;
}


const DebitCardField: FC<IMenu> = ({ className }): ReactElement => (
  <>
    <Box
      className={cn(styles.form, className)}
      component="form"
      sx={{
         m: 1, width: '45ch' ,padding:"0.5rem",

      }}
      noValidate
      autoComplete="off"
    >
    <Box
       className={cn(styles.BillingAddress,className)}
        component='div' 
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
        className={cn(styles.Billing ,className)}
          id="dropdown-label"
          sx={{
            gridArea: 'label',
          }}
        >Billing Address
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
          }} id="combobox"
          options={state}
          renderInput={(params) => <TextField {...params} className={cn(styles.state, className)} defaultValue="State" label="State" />}
          style={{ width: '50%' }}
        /> 
        {/* ////////////////District and pincode */}
<Autocomplete
        
        className={cn(styles.District, className)}
        sx={{
          '& .MuiAutocomplete-popupIndicator': {
            display:"inline-flex"
          },
          gridArea: 'day',
        }}
        id="combobox"
        options={District}
        renderInput={(params) => <TextField {...params} className={cn(styles.District, className)} defaultValue="Dirstrict" label="District" />}
      />

<Box
        className={cn(styles.pincode, className)}

        component='div'
        sx={{
          'day-month-box': {
            display: 'none',
            gridTemplateAreas: `
                                'label',;
                                `,
          },
        }}
      >
 
       
        <TextField required className={cn(styles.pincode, className)} defaultValue="Pincode" label="pincode" variant='outlined' /> 
     
        </Box>

    
 
         <InputLabel
        className={cn(styles.payment1,className)}
          id="dropdown-label"
          sx={{
            gridArea: 'label',
          }}
        >Payment Method
        </InputLabel> 
       
       <TextField required className={cn(styles.NameonCard, className)} defaultValue="Name on Card" label="Name on Card" />
     
     <TextField required className={cn(styles.cardNumber, className)} defaultValue="Card Number" label="Card Number"  inputProps={{ maxLength: 16 }}/>
     <TextField required className={cn(styles.security, className)} label="CVV"  defaultValue="CVV"  inputProps={{ maxLength: 3 }}/>
     <TextField required className={cn(styles.Expirydate, className)} label="MM/YY" defaultValue="Expiry Date" inputProps={{ maxLength: 4 }} />
     

        </Box>
       
 
      
     
    </Box>
  </>
)

export default DebitCardField
