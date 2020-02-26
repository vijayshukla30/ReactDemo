import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducers from './reducers';

// Add Middleware
const middleware = applyMiddleware(thunk, logger());

//Create A Store
const store = createStore(reducers, middleware);
export default store;
