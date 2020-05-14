import React from "react";
import { connect } from "react-redux";
import ShowListItems from "./ShowListItems";
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilter } from "../redux/selectors";
//import { VISIBILITY_FILTERS } from "../constants";

import '../App.css';

const ShowList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          // console.log(todo)
          return <ShowListItems key={`todo-${todo.id}`} todo={todo} />;
        })
      : null}
  </ul>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(ShowList);
