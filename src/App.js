import { useState } from "react";

function App() {
  const [arrayLenght, setArrayLenght] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="app">
      <h1>To Do App</h1>
      <div className="todo">
        <p>
          {arrayLenght.length} of {arrayLenght.length} remaining
        </p>
        <button className="delete-btn" onClick={() => setArrayLenght([])}>
          DEL
        </button>
      </div>
      <div class="enter-todo">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="add-btn"
          onClick={() => setArrayLenght([...arrayLenght, inputValue])}
        >
          ADD
        </button>
      </div>
      {arrayLenght.length > 0 &&
        arrayLenght.map(function (data, i) {
          return (
            <div className="todo-display" key={Math.random()}>
              <div className="my-to-do">
                <input type="checkbox" id="coo" />
                <label for="coo" className="button">
                  {data}
                </label>
                <button
                  className="sub-btn"
                  onClick={() => {
                    const updatedTask = arrayLenght.filter((_, index) => {
                      return index !== i;
                    });
                    setArrayLenght(updatedTask);
                  }}
                >
                  DEL
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
