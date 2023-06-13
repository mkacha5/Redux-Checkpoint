import React from "react";
import { useDispatch } from "react-redux";
import {
  DELETE_TASK,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
} from "../../redux/Todoslice";
const Task = ({ todo }) => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    if (e.target.id === "complete") {
      dispatch(TOGGLE_COMPLETED_TASK(todo.id));
    }
    if (e.target.id === "edit") {
      dispatch(SET_CURRENT_TASK(todo));
    }
    if (e.target.id === "delete") {
      dispatch(DELETE_TASK(todo.id));
    }
  };
  return (
    <li
      className={`list-group-item ${
        todo.isDone && "list-group-item-success"
      } d-flex align-item-center justify-content-between`}
    >
      <div className={todo.isDone ? "completed" : ""}>{todo.description}</div>
      <div className="btn-group" role="group">
        <i
          id="complete"
          className="fa fa-check text-secondary"
          onClick={onClick}
        ></i>
        <i
          id="edit"
          data-bs-toggle="modal"
          data-bs-target="#editTask"
          className="fas fa-pen text-dark"
          onClick={onClick}
        ></i>
        <i
          id="delete"
          className="fa fa-trash text-danger"
          onClick={onClick}
        ></i>
      </div>
    </li>
  );
};

export default Task;
