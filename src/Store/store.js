import {combineReducers, createStore} from "redux";

import userReducer from "./user-reducer";
import tweetReducer from "./tweet-reducer";

//Combine all reducers
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetReducer
});

//Create A Store
const store = createStore(reducers);

//Subscribe the store
store.subscribe(() => {
  console.log("Store changed", store.getState());
});


