import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaskeProducts from './BasketProducts';

class BasketList extends Component {
  render() {
    const { basket, myStore } = this.props;
    return (
      <div>
        {
          basket.map((c, i) =>
            <BaskeProducts 
              desc={c.item}
              key={i}
              id={i}
              price={c.price}
            />
          )
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    basket: state.basket.todos
  })
)(BasketList);