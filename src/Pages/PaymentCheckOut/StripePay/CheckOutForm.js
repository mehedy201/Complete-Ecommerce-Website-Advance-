import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { CART_CONTEXT } from '../../../App';

const CheckOutForm = () => {

    const { setItemCount } = useContext(CART_CONTEXT);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('')

    let orderdData = JSON.parse(localStorage.getItem('orderdData'));
    // const {newPrice} = orderdData;


    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderdData),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [orderdData]);


    const handleSubmit = async (event) => {
      event.preventDefault();



      if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);
      if (card == null) {
        return;
      }

      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        console.log('[error]', error);
        setCardError(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }

      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
          },
        },
      );
      if(confirmError){
        console.log('confirmError 1111111111111111111', confirmError.message);
      }
      if(paymentIntent.status === "succeeded"){
        setPaymentSuccess('Congrats! Your payment complete');
        setTransactionId(paymentIntent.id);
        localStorage.removeItem("cartProduct");
        setItemCount(0);
        orderdData = [];
        localStorage.removeItem("orderdData");
        return
      }
    }

    







    return (
      <>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        <button disabled={!stripe || !clientSecret} className='btn btn-info btn-sm fw-bold  px-4 mt-3' type="submit">Pay</button>
        <p className='text-danger'>{cardError}</p>
        <h5 className='text-success'>{paymentSuccess}</h5>
        {transactionId && <p className='text-info fw-bold'>Transaction ID: {transactionId}</p>}
        </form>
      </>
    );
};

export default CheckOutForm;