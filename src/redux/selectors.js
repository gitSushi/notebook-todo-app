import { VISIBILITY_FILTERS } from "../constants";
import { TODO_STATES } from "../constants";

export const getTodosState = store => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => todo.todoState === TODO_STATES[0]);
    case VISIBILITY_FILTERS.TOCOMPLETE:
      return allTodos.filter(todo => todo.todoState === TODO_STATES[1]);  
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.todoState === TODO_STATES[2]);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
