const initialState = {  
  pages: ''
};

const paginationCounter = (state=initialState, action) => {
  switch (action.type) {
    case 'PAGINATION_COUNTER':
      let count = action.lengthPaginat/6;
      return Object.assign({}, state, {
        pages: count
      })
    
    default:
      return state;
  }
}

export default paginationCounter;