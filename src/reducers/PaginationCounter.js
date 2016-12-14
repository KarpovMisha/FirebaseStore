const initialState = {  
  todos: []
};

const paginationCounter = (state=initialState, action) => {
  switch (action.type) {
    case 'PAGINATION_COUNTER':
      let count = action.lengthPaginat/6;
      return count;
    
    default:
      return state;
  }
}

export default paginationCounter;