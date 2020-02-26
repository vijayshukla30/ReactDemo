//Combine all reducers
import {combineReducers} from "redux";
import userReducer from "./user-reducer";
import tweetReducer from "./tweet-reducer";

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetReducer
});

export default reducers;
