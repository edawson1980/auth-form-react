import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    password: 'swordfish',
    authorized: false
  };
  this.authorize = this.authorize.bind(this);
}
authorize(e) {
  const password = e.target.querySelector(
    'input[type="password"]').value;
  const auth = password == this.state.password;
  this.setState({
    authorized: auth
  });
}
};