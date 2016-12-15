const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    action.payload.then(
      res => {
        // console.log('promise', res);
        action.payload = res;
        store.dispatch(action);
      },
      error => {
        action.error = true;
        // action.payload = error.response.body;
        store.dispatch(action);
      }
    );
    return;
  }

  if (isPromise(action.count)) {
    action.count.then(
      res => {
        store.dispatch({ type: 'PAGINATION_COUNTER', lengthPaginat: res});
      },
      error => {

      }
    );
  }
  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}

export { promiseMiddleware }