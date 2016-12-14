const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    action.payload.then(
      res => {
        // console.log('promise', res);
        action.payload = res;
        store.dispatch(action);
        store.dispatch({ type: 'PAGINATION_COUNTER', lengthPaginat: res.length});
      },
      error => {
        action.error = true;
        // action.payload = error.response.body;
        store.dispatch(action);
      }
    );
    return;
  }
  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}

export { promiseMiddleware }