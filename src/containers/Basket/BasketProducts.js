import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class StoreProducts extends Component {
  static propTypes = {
    desc: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct() {
    let ref = firebase.database().ref().child('Basket').child(this.props.client)
    ref.once('value').then(snapshot => {
      const todos = [];
      snapshot.forEach(data => {
        todos.push(data.key);
      });
        const tmp = todos[this.props.id];
        firebase.database().ref().child('Basket').child(this.props.client).child(tmp).remove();
    })
  }

  render() {
    const { desc, price } = this.props;
    return (
      <div>
        <span>{desc} - </span> {price} <button type="button" onClick={this.deleteProduct}>Delete</button>
      </div>
    )
  }
}

export default connect( state => ({
  client: state.basket.uid
}))(StoreProducts)