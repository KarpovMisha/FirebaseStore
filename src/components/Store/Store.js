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
  }
  
  render() {
    const { itemList, pageNum } = this.props;
    console.log('pageNum', pageNum);
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