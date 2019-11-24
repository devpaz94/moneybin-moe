import React from 'react';
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './components/MyStoreCheckout';

class App extends React.Component{


render() {
  return (
    <StripeProvider apiKey="pk_test_KQqH7V64eU0k60x04UVU3aj700BfguImsv" >
        <MyStoreCheckout />
      </StripeProvider>
  );
}

}

export default App;
