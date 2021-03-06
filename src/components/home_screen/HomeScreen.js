import React from 'react';
import {StripeProvider} from 'react-stripe-elements';

import { Elements } from 'react-stripe-elements';
import { Col, Row, Container } from 'reactstrap';
import logo from '../../money_bin.jpg'
import './styles.css'

import CheckoutForm from './checkout_form/CheckoutForm';
import Header from './Header'
import Footer from './Footer'

class HomeScreen extends React.Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_KQqH7V64eU0k60x04UVU3aj700BfguImsv" >

      <Container fluid className='container'>
      <Row className='container'>
        <Col sm={{ size: 12, offset: 0 }}>
          <Header />
       </Col>
      </Row>
      <Row className='container'>
        <Col sm={{ size: 4, order: 2, offset: 4 }}>
          <img  alt="" src={logo}  />
       </Col>
      </Row>
      <Row>
      <Col sm={{ size: 6, order: 2, offset: 3 }}>
        <Elements>
          <CheckoutForm />
        </Elements>
        </Col>
      </Row>
      <Row className='footer'>
      <Col sm={{ size: 12, offset: 0 }}>
        <Footer />
        </Col>
      </Row>
      </Container>
    </StripeProvider>

    );
  }
}

export default HomeScreen;
