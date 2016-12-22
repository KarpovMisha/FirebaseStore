import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Basket extends Component {
  constructor(props) {
    super(props);
    this.listClient = this.listClient.bind(this);
  }

  listClient() {
    const ref = firebase.database().ref().child('Basket').child(this.props.basket.uid);
    ref.once('value').then(snapshot => {
      let todos = [];
      snapshot.forEach(data => {
        console.log(data.val());

      })
    })
  }

  render() {
    return (
      <div>
        <Link to='/' onClick={this.listClient}>Корзина</Link>
      </div>
    )
  }
}

export default connect( state => ({
  basket: state.basket
}))(Basket);