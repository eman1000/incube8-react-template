import { combineReducers } from "redux";
import { HomeReducer as home } from "../routes/Home/module";
export const makeRootReducer = () => {
  return combineReducers({
    home
  });
};

export default makeRootReducer;