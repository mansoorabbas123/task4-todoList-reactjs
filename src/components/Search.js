import React from "react";

const Search = ({ filterTodo, searchTodo }) => {
  return (
    <div>
      <form>
        <input
          className="search-todo search"
          type="text"
          onChange={(e) => filterTodo(e.target.value)}
          placeholder="Search Todo..."
          value={searchTodo}
        />
      </form>
    </div>
  );
};

export default Search;
