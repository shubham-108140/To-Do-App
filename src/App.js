import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Search from "./Components/Search";
import ToDOHero from "./Components/ToDoHero";
import ToDOList from "./Components/ToDoList";
import React, { createContext, useState, useEffect } from "react";

export const TodoContext = createContext(); // Exporting the TodoContext

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return (
      storedTodos || [
        { title: "Some task", id: "123212312", is_completed: false },
        { title: "Some other task", id: "87798798sad", is_completed: true },
        { title: "last task", id: "0798asdjhasd", is_completed: true },
      ]
    );
  });

  //search
  const [query, setQuery] = useState("");

  const todos_completed = todos?.filter((singletodo) => {
    return singletodo.is_completed === true;
  }).length;

  const total_todos = todos?.length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  return (
    <div className="App Wrapper_class">
      <TodoContext.Provider value={{ todos, setTodos, query, setQuery }}>
        <Header />
        <ToDOHero todos_completed={todos_completed} total_todos={total_todos} />
        <div className="grand-parent flex flex-col justify-centre">
          <div className="form-parent">
            <div className="w-1/3 mr-3">
              <Search/>
            </div>
            <div className="w-2/3 pr-0 mr-0">
              <Form/>
            </div>
          </div>
          <ToDOList/>
        </div>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
