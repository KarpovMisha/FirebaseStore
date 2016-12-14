const initialState = {  
  todos: []
};

const storeList = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_TODO':
      let loadTodos = Object.assign({}, state,  {
        todos: [ ...action.payload ]
      });
    return loadTodos;

    default:
      return state;
  }
}

export default storeList;