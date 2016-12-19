import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { createEmail, createPassword } from '../../actions/action';

class ModalHeader extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.submit = this.submit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
  }

  handleEmail(event) {
    event.preventDefault();
    this.props.dispatch(createEmail(event.target.value));
  }

  handlePassword(event) {
    event.preventDefault();
    this.props.dispatch(createPassword(event.target.value));
  }

  submit(event) {
    let { email, password } = this.props.header;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(regUser => {
      firebase.database().ref().child('clients').push({
        id: regUser.uid,
        name: regUser.email
      })
      console.log('1', regUser.email);
      console.log('2', regUser.uid);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        console.log('The password is too weak.');
      } else {
        console.log('2', errorMessage);
      }
    });

    event.preventDefault();
  }

  render() {
    return(
      <div>
        <Link to='/' onClick={this.open}>Регистрация </Link>
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
                <button type="submit" className="btn btn-default">Регистрация</button>
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
}))(ModalHeader);

