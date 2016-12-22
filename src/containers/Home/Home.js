import React, { Component, PropTypes } from 'react';
import { Store, ModalHeader, SingInUser, Basket } from 'components';
// import { Test } from 'containers';
import {} from '../../stylesheets/main.scss';

export default class Home extends Component {
  static propTypes = {
    params: PropTypes.object
  }

  render() {
    return(
      <div>
        <Basket />   
        <ModalHeader />
        <SingInUser />
        <Store params={this.props.params}/>
      </div>
    );
  }
}
