import React from "react";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  const { item, deleteItem } = props;

  return (
    <div data-testid="todo-item" className="To-Do-Item">
      <p data-testid="todo-text" className="To-Do-Item-Text">
        {item.text}
      </p>
      <button data-testid="delete" className="To-Do-Item-Delete" onClick={() => deleteItem(item)}>
        -
      </button>
    </div>
  );
};

export default ToDoItem;