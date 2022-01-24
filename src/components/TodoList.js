import React from "react";

const TodoList = ({ todos, deletTodo, searchTodo }) => {
  return (
    <div className="todos">
      {todos
        .filter((todo) => {
          if (searchTodo == "") {
            return todo;
          } else if (
            todo.title.toLowerCase().includes(searchTodo.toLowerCase())
          ) {
            return todo;
          }
        })
        .map((todo, idx) => {
          return (
            <div className="todo-item" key={idx}>
              <div className="todo-item-child">{todo.title}</div>
              <i
                className="far fa-trash-alt"
                onClick={() => deletTodo(todo.id)}
              ></i>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
