import React from "react";

const AddTodo = ({ submitHandler, createTodo, todo }) => {
  return (
    <div>
      <h3>Add Todo Item</h3>
      <form onSubmit={submitHandler}>
        <input
          className="add-todo search"
          type="text"
          onChange={(e) => createTodo(e.target.value)}
          placeholder="Todo Item..."
          value={todo}
        />
      </form>
    </div>
  );
};

export default AddTodo;
