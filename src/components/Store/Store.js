import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { load, count } from '../../actions/action';
import StoreList from './StoreList';
import ReactPaginate from 'react-paginate';
import { push } from 'react-router-redux';

class Store extends Component {
  static propTypes = {
    load: PropTypes.func,
    count: PropTypes.func,
    itemlist: PropTypes.array,
    pageNum: PropTypes.object,
    params: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      page: this.props.params.id
    };

    this.clickPaginat = this.clickPaginat.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(load('0'));
    this.props.dispatch(count());
  }
  
  componentWillReceiveProps(nextProps) {
    let selected = this.props.params.id;
    let offset = selected * 6;
    let tmp = String(offset);
    this.props.dispatch(load(tmp));
    // this.setState({ page: offset });
  }

  clickPaginat({ selected }) {
    this.context.router.push(`/store/${selected}`);
    let offset = selected * 6;
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
                id={i}
                price={c.price}
              />
            )
          }
        </ol>
      <ReactPaginate
        pageNum={pageNum.pages}
        containerClassName="pagination"
        clickCallback={this.clickPaginat}
        activeClassName="active"
      />
      </div>
    );
  }
}

Store.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect (state =>({
  itemList: state.storeList.todos,
  pageNum: state.paginationCounter
}))(Store);