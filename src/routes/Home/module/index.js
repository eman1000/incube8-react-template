//LIBRARIES
import update from "immutability-helper";
import constants from "./actionConstants";
const {
  ADD_TODO,
  UPDATE_TODO
} = constants;

// Keep track of ticket id
let id = 0;

//ACTION CREATORS

//add todo 
export function addTodo(payload){
  return {
    type:ADD_TODO,
    payload
  };
}

//update todo 
export function updateTodo(payload){
  return {
    type:UPDATE_TODO,
    payload
  };
}

//ACTION HANDLERS

//handle add todo
function handleAddTodo(state, action){
  const todo = {
    id: id++,
    desc: action.payload,
    status: 'todo'
  }
  return update(state, {
    tickets:{
      $push:[todo]
    }
  });
}

//handle update todo
function handleUpdateTodo(state, action){
  const {index, status, desc} = action.payload;
  console.log("desc", desc);

  if(desc !== undefined){
    return update(state, {
      tickets:{
        [index]:{
          status:{
            $set:status
          },
          desc:{
            $set:desc
          }
        }
      }
    });
  }
  return update(state, {
    tickets:{
      [index]:{
        status:{
          $set:status
        }
      }
    }
  });
}

const ACTION_HANDLERS = {
  ADD_TODO:handleAddTodo,
  UPDATE_TODO:handleUpdateTodo
};

const initialState = {
  tickets: [{
    id: id++,
    desc: 'Have fun with Online Test',
    status: 'todo'
  }]
};

export default function HomeReducer (state = initialState, action){
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}