import React, { FC, ReactElement, useState } from 'react';
import { Box, TextField, MenuItem,InputLabel,Button } from '@mui/material';
import cn from 'classnames';

import styles from './NetBanking.module.scss'; // Import the SCSS file for styling

interface IMenu {
  className?: string;
}

const NetbankingPaymentForm: FC<IMenu> = ({ className }): ReactElement => {
  const [selectedBank, setSelectedBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [formErrors, setFormErrors] = useState<{ bank?: string; accountNumber?: string }>({});

  const banks = [
    { value: 'bank1', label: 'State Bank of India' },
    { value: 'bank2', label: 'ICICI' },
    { value: 'bank3', label: 'Kotal Mahindra Bank' },
    { value: 'bank4', label: 'HDFC' },
    { value: 'bank5', label: 'Axis Bank LTD' },   
    { value: 'bank6', label: 'IDFC' },
    { value: 'bank7', label: 'Kenra Bank ' },
    // Add more banks as needed
  ];

  const handleBankChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedBank(event.target.value);
    setFormErrors({ ...formErrors, bank: '' }); // Clear bank error when bank selection changes
  };

  const handleAccountNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAccountNumber(value);
    setFormErrors({ ...formErrors, accountNumber: '' }); // Clear account number error when it changes
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate form fields
    const errors: { bank?: string; accountNumber?: string } = {};
    if (!selectedBank) {
      errors.bank = 'Please select a bank';
    }
    if (!accountNumber.trim()) {
      errors.accountNumber = 'Account number is required';
    } else if (!/^\d+$/.test(accountNumber)) {
      errors.accountNumber = 'Account number should only contain digits';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Proceed with payment logic (e.g., API call)
    console.log('Submitting payment with:', selectedBank, accountNumber);
    // Implement actual payment submission logic here
  };

  return (
    <Box
      component="form"
      className={cn(styles.netbankingForm, className)} // Apply the 'netbankingForm' class for styling
      onSubmit={handleSubmit}
    >
       <InputLabel>
          
            Net Banking 
          </InputLabel>

      <TextField
      
        select
        label="Select Bank"
        variant="outlined"
        value={selectedBank}
        onChange={handleBankChange}
        error={!!formErrors.bank}
        helperText={formErrors.bank}
        required
        fullWidth // Ensures the TextField takes full width
        className={cn(styles.formField ,className)} // Apply the 'form-field' class for styling
      >
        {banks.map((bank) => (
          <MenuItem key={bank.value} value={bank.value}>
            {bank.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Account Number"
        variant="outlined"
        value={accountNumber}
        onChange={handleAccountNumberChange}
        error={!!formErrors.accountNumber}
        helperText={formErrors.accountNumber}
        required
        fullWidth // Ensures the TextField takes full width
        className={cn(styles.formField,className)} // Apply the 'form-field' class for styling
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={cn(styles.submitButton,className)} // Apply the 'submit-button' class for styling
      >
        Pay Now
      </Button>
    </Box>
  );
};

export default NetbankingPaymentForm;
