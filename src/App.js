import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Todolist from "./components/Todolist";

function App() {
  const [inputList, setinputList] = useState("");
  const [items, setitems] = useState([]);

  const itemEvents = (event) => {
    setinputList(event.target.value);
  };
  const listOfItems = () => {
    setitems((olditems) => {
      return [...olditems, inputList];
    });

    setinputList("");
  };
  const deleteitems = (id) => {
    console.log("deleted");
    setitems((olditems) => {
      return olditems.filter((arrelement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          value={inputList}
          placeholder="Add an item"
          onChange={itemEvents}
        />
        <button onClick={listOfItems}> + </button>

        <ol>
          {items.map((itemval, index) => {
            return (
              <Todolist
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteitems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
