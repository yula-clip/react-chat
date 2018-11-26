const { createStore } = require('redux');

const increment = {
  type: 'INCREMENT'
}

const decrement = {
  type: 'DECREMENT'
}

const initialState = 0;

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

const interval = setInterval(() => {
  store.dispatch(increment);

  if(store.getState() >= 10) {
    clearInterval(interval);
    unsubscribe();
  }
}, 1000);
