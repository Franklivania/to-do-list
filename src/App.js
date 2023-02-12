import React, { useState } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Go grocery shopping", completed: false },
    { id: 2, task: "Take a walk in the park", completed: true },
    { id: 3, task: "Study for exams", completed: false }
  ]);

  const date = new Date()
  const dateArray = date.toString().split(' ');
  const shortDate = dateArray.slice(0, 4).join(' ');
  console.log(dateArray)

  const addTodo = task => {
    setTodos([...todos, { id: todos.length + 1, task, completed: false }]);
  };

  const updateTodo = (id, task) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, task } : todo))
    );
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <div>
        <h1>Todo List</h1>
        <h2>Today is {shortDate}</h2>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.task}
              <button onClick={() => updateTodo(todo.id, prompt("New task"))}>
                Update
              </button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => addTodo(prompt("Enter task"))}>Add Todo</button>
      </div>
    </div>
  );
}

export default App;
