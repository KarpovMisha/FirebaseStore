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
      page: ''
    };

    this.clickPaginat = this.clickPaginat.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(load('0'));
    this.props.dispatch(count());
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.params.id === undefined) {
      this.setState({ page: 0 });
    } else {
      let selected = this.props.params.id;
      let offset = selected * 6;
      this.setState({ page: offset });
    }
    let offset = this.state.page; 
    let tmp = String(offset);
    this.props.dispatch(load(tmp));
  }

  clickPaginat({ selected }) {
    this.context.router.push(`/store/${selected}`);
    // console.log(this.state.page);
    let offset = this.state.page;
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