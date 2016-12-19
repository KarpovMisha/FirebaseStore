import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { createEmail, createPassword } from '../../actions/action';

class SingInUser extends Component {
  constructor(props, context) {
  super(props, context);

  this.state = {
    showModal: false,
    userName: ''
  };

  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
  this.handleEmail = this.handleEmail.bind(this);
  this.handlePassword = this.handlePassword.bind(this);
  this.submit = this.submit.bind(this);
}

open() {
  this.setState({showModal: true});
}

close() {
  this.setState({showModal: false});
}

handleEmail(event) {
  this.props.dispatch(createEmail(event.target.value));
}

handlePassword(event) {
  this.props.dispatch(createPassword(event.target.value));
}

submit(event) {
  let { email, password } = this.props.header;
  
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(regUser => {
    this.setState({ userName: regUser.email });
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      console.log('Wrong password.');
    } else {
      console.log('1', errorMessage);
    }
    console.log('2', error);
  });

  event.preventDefault();
}

render() {
  return(
    <div>
      <Link to='/' onClick={this.open}>Sing In</Link>
      <p>Добро пожаловать, {this.state.userName} </p>
      <div>
        <Modal className="modal-container" 
          show={this.state.showModal} 
          onHide={this.close}
          animation={true} 
          bsSize="small">
          <Modal.Header closeButton> Регистрация </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.submit}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" onChange={this.handleEmail} placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label>Пароль</label>
                <input type="password" className="form-control" onChange={this.handlePassword} placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-default">Войти</button>
            </form>
          </Modal.Body>

        </Modal> 
      </div>
    </div>
  );
 }
}

export default connect( state => ({
  header: state.headerAuth
}))(SingInUser);
