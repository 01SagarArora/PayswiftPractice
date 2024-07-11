import * as React from 'react';
import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { Box, Tab, Tabs } from '@mui/material';
// import cn from 'classnames';

import { mainDataPayment, PaymentMethod } from './../../models/PaymentOptions';
import CreditCardField from './../../components/credit-card-field/CreditCardField'
// import DebitCardField from './../../components/Debit-card-field/DebitCardField';
import NetbankingPaymentForm from 'components/Net-Banking-field/NetBankField';
import CreditCardField2 from 'components/Credit-Card/credit-card-2';

// import styles from './creditCard.module.scss'

interface IMenu {
  className?: string;
}


const PayswiftHomePage: FC<IMenu> = (): ReactElement => {

  const mainDataPayment = useSelector((state: RootState) => state.mainDataPayment?.mainDataPayment) as mainDataPayment;
  const tripType = mainDataPayment.agentProfileType;
  const paymentOptions = tripType == "PERSONAL" ? mainDataPayment.agentPaymentOptions.paymentOptions.personal : mainDataPayment.agentPaymentOptions.paymentOptions.official;

  function formattedPaymentOptions(paymentOptions: string[]) {
    let paymentType = new Array(paymentOptions.length);
    paymentOptions.map((paymentOption) => paymentType[PaymentMethod[Object.keys(paymentOption) as unknown as keyof typeof PaymentMethod].id] = PaymentMethod[Object.keys(paymentOption) as unknown as keyof typeof PaymentMethod].label)
    return paymentType;
  }

  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("this is newvalue and evemt ",event, newValue);
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps, {}) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3, width:'50%',margin:"2rem" }}>{children}</Box>}
      </div>
    );
  }


  // function a11yProps(index: number) {
  //   return {
  //     id: `simple-tab-${index}`,
  //     'aria-controls': `simple-tabpanel-${index}`,
  //   };
  // }

  return (
    <>
      {<Box sx={{ width: '100%', typography: 'body1' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            orientation="vertical"
            value={value}
            sx={{ borderRight: 1, borderColor: 'divider',  }}
            onChange={handleChange}
            aria-label="lab API tabs example">
            {
              formattedPaymentOptions(paymentOptions).map((paymentOptionItem: string) =>
                <Tab label={paymentOptionItem as PaymentMethod["label"]} />
              )
            }
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={PaymentMethod.CC.id}>
          <>
            <CreditCardField />
          </>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={PaymentMethod.CP.id}>
        <>
            <NetbankingPaymentForm/>
            </>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={PaymentMethod.DC.id}>
         <>
            {/* <DebitCardField/> */}
            <CreditCardField2/>
            </>
        </CustomTabPanel>
      </Box>
      }
    </>
  )
}

export { PayswiftHomePage }