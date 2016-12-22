const initialState = {  
  uid: '',
  todos: []
};

const basket = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_NAME':
      let tmp =  Object.assign({}, state, {
        uid: action.uid
      });

      return tmp;
    
    case 'BASKET_CLIENT':
      let basketTodos = Object.assign({}, state, {
        todos: [...action.basket]
      })
      
      return basketTodos;

    default:
      return state;
  }
}

export default basket;