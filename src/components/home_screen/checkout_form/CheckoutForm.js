import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import { Button } from 'reactstrap';
import { Col, Row, Container } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
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
      <Container fluid>
      <Row className='container'>
      <Col sm={{ size: 12, order: 2, offset: 0 }}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">£</InputGroupAddon>
          <Input placeholder="Amount to bin" type="number" />
        </InputGroup>
       </Col>
      </Row>
        <Row>
          <Col sm={{ size: 8 }}>
            <CardSection />
          </Col>
            <Col sm={{ size: 4 }}>
            <Button className="float-right">Bin & Share</Button>
          </Col>
        </Row>
      </Container>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
