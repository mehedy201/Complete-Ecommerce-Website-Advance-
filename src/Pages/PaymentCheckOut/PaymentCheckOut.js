import React, { useState } from 'react';
import './PaymentCheckOut.css'

const PaymentCheckOut = () => {


    const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };


    return (
        <>
      
    </>
    );
};

export default PaymentCheckOut;