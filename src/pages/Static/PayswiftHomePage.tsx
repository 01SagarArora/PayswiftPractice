
import { Button } from '@mui/material';

import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import {  PaymentMethod, PaymentLabel } from './../../models/PaymentOptions';

const PayswiftHomePage = () => {

  const paymentOptionData = useSelector((state: RootState) => state.mainDataPayment?.mainDataPayment);
  const paymentOptions = Object.values(paymentOptionData);
  console.log(paymentOptions);

  return (
    <>
      {
        paymentOptions.map((paymentOptionItem: any, index) =>
          <Button key={index} variant="outlined"
            onClick={() => ""}>{PaymentMethod[Object.keys(paymentOptionItem)[0].toString() as PaymentLabel]}
          </Button>

        )}
    </>
  )
}

export { PayswiftHomePage }