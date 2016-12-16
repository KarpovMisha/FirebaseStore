import React, { PropTypes } from 'react';

let StoreList = ({ desc, price }) => {
  return (
    <li>
      <span>{desc} - </span> {price} <button type="button">Купить</button>
    </li>
  )
}

StoreList.propTypes = {
  desc: PropTypes.string,
  price: PropTypes.number
}

export default StoreList;