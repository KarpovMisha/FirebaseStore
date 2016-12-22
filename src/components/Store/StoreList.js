import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class StoreList extends Component {
  static propTypes = {
    desc: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.loadProduct = this.loadProduct.bind(this);
  }

  loadProduct() {
    const { desc, price, basket } = this.props;
    let ref = firebase.database().ref().child('Basket').child(this.props.basket.uid);
    ref.push({
      item: desc,
      price
    })
  }

  render() {
    const { desc, price } = this.props;
    return (
      <li>
        <span>{desc} - </span> {price} <button type="button" onClick={this.loadProduct}>Купить</button>
      </li>
    )
  }
}

export default connect( state => ({
  basket: state.basket
}))(StoreList);
