import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'whatwg-fetch'


class LoginPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    email: "aehrtaeh",
    password: "aehtraerth",
  };
}

submitForm  = (ev) => {
  ev.preventDefault()
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  fetch('http://localhost:8881/create_user', {
      method: 'POST',
      headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
      mode: 'no-cors',
      cache: 'default',
      body: JSON.stringify({
      "email" : "kjshdflia",
      "password" : "password"
    }),
  });
}

handleEmailChange = (email) => {
  this.setState({ email: email.target.value.toString() })
}

handlePasswordChange = (password) => {
  this.setState({ password: password.target.value.toString() })
}

render (){
  return (
  <div>
  <Form>
    <FormGroup>
    <Label for="exampleEmail">Email</Label>
    <Input
      type="email"
      placeholder="with a placeholder"
      value={this.state.email}
      onChange={(email) => this.handleEmailChange(email)}
     />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">Password</Label>
    <Input
      type="password"
      placeholder="password placeholder"
      value={this.state.password}
      onChange={(password) => this.handlePasswordChange(password)}
    />
  </FormGroup>
  <Button onClick={this.submitForm} >Submit</Button>
  </Form>
  </div>
);
}
}

export default LoginPage;
