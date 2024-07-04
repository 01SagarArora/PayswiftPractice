import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { Box, Tab, Tabs } from '@mui/material';

import { mainDataPayment, PaymentMethod } from './../../models/PaymentOptions';

const PayswiftHomePage = () => {

  const mainDataPayment = useSelector((state: RootState) => state.mainDataPayment?.mainDataPayment) as mainDataPayment;
  const tripType = mainDataPayment.agentProfileType;
  const paymentOptions = tripType == "PERSONAL" ? mainDataPayment.agentPaymentOptions.paymentOptions.personal : mainDataPayment.agentPaymentOptions.paymentOptions.official;
  
  function formattedPaymentOptions(paymentOptions: string[]) {      
    let paymentType = new Array(paymentOptions.length);          
      paymentOptions.map((obj) => paymentType[PaymentMethod[Object.keys(obj)as unknown as keyof typeof PaymentMethod].id] = PaymentMethod[Object.keys(obj)as unknown as keyof typeof PaymentMethod].label)            
    return paymentType;
  }

  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event, newValue);
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  // index: number;


  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
            sx={{ borderRight: 1, borderColor: 'divider' }}
            onChange={handleChange}
            aria-label="lab API tabs example">
            {                         
              formattedPaymentOptions(paymentOptions).map((paymentOptionItem: string) =>
                <Tab label={paymentOptionItem as PaymentMethod["label"]} />
              )
            }
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={PaymentMethod.CP.id}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={PaymentMethod.CC.id}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={PaymentMethod.DC.id}>
          Item Three
        </CustomTabPanel>
      </Box>
      }
    </>
  )
}

export { PayswiftHomePage }