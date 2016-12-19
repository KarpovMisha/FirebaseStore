import React from 'react';
import { Store, ModalHeader, SingInUser, Basket } from 'components';
// import { Test } from 'containers';
import {} from '../../stylesheets/main.scss';

let Home = () => {
  return(
    <div>
      <Basket />   
      <ModalHeader />
      <SingInUser />
      <Store />
    </div>
  );
}

export default Home;