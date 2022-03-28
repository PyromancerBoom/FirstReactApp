import React, {useState} from "react";
import TodoList from "./TodoList";

function App() {
  // Calling the useState func to set default state of app when it starts
  // This function returns an array
  // We are basically destructuring the array
  const [todos, setTodos] = useState([])
  return (
    <>
    <TodoList />
    <input type="text" />
    <button>Add todo</button>
    <button>Clear</button>
    <div>0 left to do</div>
    
    </>
  )
}

export default App;
