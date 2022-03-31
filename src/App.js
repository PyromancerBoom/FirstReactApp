import React, {useState} from "react";
import TodoList from "./TodoList";

function App() {
  // Calling the useState func to set default state of app when it starts
  // This function returns an array
  // We are basically destructuring the array
  const [todos, setTodos] = useState([{id: 1, name: 'Todo 1', complete: false}])
  return (
    // Passing the useState here
    // We have a prop todos and we pass it
    <>
    <TodoList todos={todos}/>
    <input type="text" />
    <button>Add todo</button>
    <button>Clear</button>
    <div>0 left to do</div>
    
    </>
  )
}

export default App;
