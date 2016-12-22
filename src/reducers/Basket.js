const initialState = {  
  uid: ''
};

const basket = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_NAME':
      return Object.assign({}, state, {
        uid: action.uid
      });
      
    default:
      return state;
  }
}

export default basket;