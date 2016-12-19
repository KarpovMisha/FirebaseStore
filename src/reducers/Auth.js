const initialState = {  
  email: '',
  password: ''
};

const headerAuth = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_EMAIL':
      let email = Object.assign({}, state, {
        email: action.email
      });
      return email;

    case 'CREATE_PASSWORD':
      let password = Object.assign({}, state, {
        password: action.password
      });
      return password;

    default:
      return state;
  }
}

export default headerAuth;