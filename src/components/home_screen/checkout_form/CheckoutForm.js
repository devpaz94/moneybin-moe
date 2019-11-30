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
    amount: "",
    piID: "123"
  };
}


  handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("https://moneybin.herokuapp.com/payment_intent?amount=" + this.state.amount)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.stripe.handleCardPayment(result);
        },

        (error) => {
          console.log(error)
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  handleAmountChange = amount => {
    this.setState({ amount: amount.target.value.toString() })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <Container fluid>
      <Row className='container'>
      <Col sm={{ size: 12, order: 2, offset: 0 }}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">£</InputGroupAddon>
          <Input placeholder="Amount to bin" type="number" value={this.state.amount} onChange={(a) => this.handleAmountChange(a)}/>
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
