import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { load } from '../../actions/action';
import StoreList from './StoreList';
import ReactPaginate from 'react-paginate';

class Store extends Component{
  static propTypes = {
    load: PropTypes.func,
    itemlist: PropTypes.array
  }

  componentWillMount() {
    this.props.dispatch(load());

    // firebase.database().ref().once('value').then((snapshot) => {
    //   snapshot.forEach(data => {
    //     let todos = data.val();
    //     console.log(todos);
    //   });
    // });
  }
  
  render() {
    const { itemList, pageNum } = this.props;
    return (
      <div className="storeList">
        <ol>
          {
            itemList.map((c, i) => 
              <StoreList 
                desc={c.item}
                key={i}
                price={c.price}
              />
            )
          }
        </ol>
      <ReactPaginate
        pageNum={pageNum}
        containerClassName="pagination"
        activeClassName="active"
      />
      </div>
    );
  }
}

export default connect (state =>({
  itemList: state.storeList.todos,
  pageNum: state.paginationCounter
}))(Store);