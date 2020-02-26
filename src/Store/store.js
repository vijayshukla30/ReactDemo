import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";


import userReducer from "./user-reducer";
import tweetReducer from "./tweet-reducer";

//Combine all reducers
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetReducer
});

const middleware = applyMiddleware(logger());

//Create A Store
const store = createStore(reducers, middleware);

//Subscribe the store
store.subscribe(() => {
  console.log("Store changed", store.getState());
});


