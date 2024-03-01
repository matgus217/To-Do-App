import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDo = () => {
  const [list, setList] = useState([
    { id: 1, text: "Workout" },
    { id: 2, text: "Cook food" }
  ]);
  const [toDo, setToDo] = useState("");

  const createNewToDoItem = () => {
    //validate todo
    if (!toDo) {
      alert("Type your scheduled items");
      return;
    }
    const newId = Math.max(...list.map((t) => t.id)) + 1;
    const newToDo = { id: newId, text: toDo };
    setList([...list, newToDo]);
    setToDo("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createNewToDoItem();
    }
  };

  const handleInput = (e) => {
    setToDo(e.target.value);
  };

  const deleteItem = (todo) => {
    setList(list.filter((item) => item !== todo));
  };

  return (
    <div className="ToDo">
      <h1 data-testid="header" className="To-Do-Header">
      What's on the schedule today?
      </h1>
      <h3 className="Subheader">Type your scheduled items here</h3>
      <div className="Container">
        <div className="ToDo-Content">
          {list.map((item) => {
            return <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />;
          })}
        </div>

        <div className="ToDoInput">
          <input
            data-testid="todo-input"
            type="text"
            value={toDo}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
          />
          <button data-testid="add" className="To-Do-Add" onClick={createNewToDoItem}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;