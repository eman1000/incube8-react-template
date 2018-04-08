//LIBRARIES
import update from "immutability-helper";
import constants from "./actionConstants";
const {
  UPDATE_TODO
} = constants;

//ACTION CREATORS

//update todo 
export function updateTodo(payload){
  return {
    type:UPDATE_TODO,
    payload
  };
}

const ACTION_HANDLERS = {
};

const initialState = {
};

export default function UpdateReducer (state = initialState, action){
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}