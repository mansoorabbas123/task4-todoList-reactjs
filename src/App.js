import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Search from "./components/Search";

function App() {
  const [todos, setTodos] = useState([
    "Build JS Project",
    "Buy Groceries",
    "Play Mario Cart",
  ]);
  const [todo, setTodo] = useState("");
  const [searchTodo, setSearchTodo] = useState("");

  const createTodo = (value) => {
    setTodo(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos((prvs) => {
      return [...prvs, todo];
    });
    setTodo("");
  };
  const filterTodo = (value) => {
    setSearchTodo(value);
  };
  const deletTodo = (id) => {
    setTodos(todos.filter((todo) => todo !== id));
  };

  return (
    <div id="todos-container">
      <div className="todos-wrapper">
        <h2>Todo List</h2>
        <Search filterTodo={filterTodo} />
        <TodoList todos={todos} deletTodo={deletTodo} searchTodo={searchTodo} />
        <AddTodo
          createTodo={createTodo}
          submitHandler={submitHandler}
          todo={todo}
        />
      </div>
    </div>
  );
}

export default App;
