import {applyMiddleware, combineReducers, createStore} from "redux";

import userReducer from "./user-reducer";
import tweetReducer from "./tweet-reducer";

//Combine all reducers
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetReducer
});


// Add Logger as Middleware
// Create a Logger
const logger = (store) => (next) => (action) => {
  console.log("Action is Triggered", action);
  // It will hold the action. So to forward action to reducer we need to use next
  next(action);
};

const middleware = applyMiddleware(logger);

//Create A Store
const store = createStore(reducers, middleware);

//Subscribe the store
store.subscribe(() => {
  console.log("Store changed", store.getState());
});


