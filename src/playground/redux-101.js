import { createStore } from 'redux';

//Action generators - fns that return action objects

const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy 
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({type: 'RESET'});

const setCount = ({count = 0}) => ({
  type: 'SET',
  count
});

//Reducers
//1. Reducers are pure functions
//2. Never change state or action

const countReducer = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(countReducer.getState());
});

//Actions

//I'd like to increment the count 
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy: 2}));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({count: 25}));