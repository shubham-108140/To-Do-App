import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import ToDOHero from "./Components/ToDoHero";
import ToDOList from "./Components/ToDoList";

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { title: "Some task", id: "123212312", is_completed: false },
    {
      title: "Some other task",
      id: "87798798sad",
      is_completed: true,
    },
    { title: "last task", id: "0798asdjhasd", is_completed: true },
  ]);
  // {
  //    title: "Some task",  // string
  //    id: self.crypto.randomUUID(), // string
  //    is_completed: false // boolean
  // }
  const todos_completed = todos.filter((todo) => {
    return todo.is_completed === true;
  }).length;

  const total_todos = todos.length;
  return (
    <div className="App Wrapper_class">
      <Header />
      <ToDOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form setTodos={setTodos} />
      <ToDOList todo={todos} />
    </div>
  );
}

export default App;
