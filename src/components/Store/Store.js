import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { load, count } from '../../actions/action';
import StoreList from './StoreList';
import ReactPaginate from 'react-paginate';

class Store extends Component{
  static propTypes = {
    load: PropTypes.func,
    itemlist: PropTypes.array
  }

  constructor(props) {
    super(props);
    this.clickPaginat = this.clickPaginat.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(load('0'));
    this.props.dispatch(count());
  }
  
  clickPaginat({ selected }) {
    let offset = selected * '6';
    let tmp = String(offset);
    this.props.dispatch(load(tmp));
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
        clickCallback={this.clickPaginat}
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