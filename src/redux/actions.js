import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;
let defaultTodoStateId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
    todoStateId: defaultTodoStateId
  }
});

export const toggleTodo = (id, todoStateId) => ({
  type: TOGGLE_TODO,
  payload: { 
    id,
    todoStateId
   }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
