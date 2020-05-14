import React from "react";
import { connect } from "react-redux";

import { toggleTodo } from "../redux/actions";
import { TODO_STATES } from "../constants";

const ShowListItems = ({ todo, toggleTodo }) => (
  <li className="todo-item" onClick={() => {
    toggleTodo(todo.id, todo.todoStateId)}}>
    <span className={
      todo && todo.todoState === TODO_STATES[0] ?
      TODO_STATES[0] :
      todo.todoState === TODO_STATES[1] ?
      TODO_STATES[1] : TODO_STATES[2]
      }>
      {todo.content}
    </span>
  </li>
);

export default connect(
  null,
  { toggleTodo }
)(ShowListItems);