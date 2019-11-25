/**
* Use the CSS tab above to style your Element's container.
*/
import React from 'react';
import { CardElement } from 'react-stripe-elements';
import './styles.css'

function CardSection () {

  const style = {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  };


  return (
    <div>
      <CardElement className="MyCardElement" style={style} />
    </div>
  );
};

export default CardSection;
