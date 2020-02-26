import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import userReducer from "./user-reducer";
import tweetReducer from "./tweet-reducer";

//Combine all reducers
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetReducer
});

const middleware = applyMiddleware(thunk, logger());

//Create A Store
const store = createStore(reducers, middleware);

//Subscribe the store
store.subscribe(() => {
  console.log("Store changed", store.getState());
});


// Dispatch a single type
//store.dispatch({type: 'DO_SOMETHING'});

// Create a dispatch with multi dispatcher
store.dispatch((dispatch) => {
  //If no type is passed then it will through error
  dispatch({type: 'DO_SOMETHING'});
  // Async Functionality
  dispatch({type: 'DO_SOMETHING_ELSE'});
});

