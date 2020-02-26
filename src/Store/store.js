import {createStore} from "redux";

//Create a Reducer
const reducer = function () {

};

//Create A Store
const store = createStore(reducer, 0);

//Subscribe the store
store.subscribe(() => {
  console.log("Store changed", store.getState());
});
