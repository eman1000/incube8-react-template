
import * as reducers from "./reducers";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {createLogger} from "redux-logger";
import {routerMiddleware} from "react-router-redux";

import thunk from "redux-thunk";


const log =  createLogger({
  diff: true,
  collapsed: true
});

const middleware = [thunk];

//middleware.push(log);

const initialState = {};
const reducer = combineReducers({...reducers});
const store   = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
  )
);

export default store;