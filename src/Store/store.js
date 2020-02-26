import {createStore} from "redux";

//Create a Reducer
const reducer = function (state, action) {
  if (action.type === "INC") {
    return state + action.data
  }

  if (action.type === "DEC") {
    return state - action.data
  }

  return state;
};

//Create A Store
const store = createStore(reducer, 0);

//Subscribe the store
store.subscribe(() => {
  console.log("Store changed", store.getState());
});


