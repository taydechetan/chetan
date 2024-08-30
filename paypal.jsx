import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "AciHbOHAJ3-W-X11euydkqLUozOvRB_4vby1wfabm-zXn8q5ErzFw4YVN0UKQ2UCO4Ri9-95ZND4eouM",
  currency: "USD",
  intent: "capture",
};

const PayPalButton = () => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: "10.00" 
              }
            }]
          });
        }}
        onApprove={async (data, actions) => {
          const details = await actions.order.capture();
          console.log('Transaction completed by ' + details.payer.name.given_name);
          alert('Transaction completed by ' + details.payer.name.given_name);
        }}
        onError={(err) => {
          console.error('PayPal Checkout onError', err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
