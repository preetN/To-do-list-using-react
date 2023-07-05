import React from "react";
import "../App.css";
const Todolist = (props) => {
  return (
    <>
      <div className="todo_style">
        <p
          className="todo_cross"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </p>
        <li> {props.text}</li>
      </div>
    </>
  );
};
export default Todolist;
