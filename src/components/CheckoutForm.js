import React from 'react';
import {injectStripe} from 'react-stripe-elements';

import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    isLoaded: false,
    piID: "123"
  };
}

componentDidMount() {
  fetch("http://localhost:8881/payment_intent?amount=100", {headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8881' }
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          piID: result
        });
      },

      (error) => {
        console.log(error)
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // You can also use handleCardPayment with the PaymentIntents API.
    // See our handleCardPayment documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-handle-card-payment
    console.log(this.state.piID);
    console.log(this.state.isLoaded);

    this.props.stripe.handleCardPayment(this.state.piID, {billing_details: {name: 'Jenny Rosen'}});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
