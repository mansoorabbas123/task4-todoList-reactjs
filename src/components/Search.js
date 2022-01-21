import React from "react";

const Search = ({ filterTodo }) => {
  return (
    <div>
      <form>
        <input
          className="search-todo search"
          type="text"
          onChange={(e) => filterTodo(e.target.value)}
          placeholder="Search Todo..."
        />
      </form>
    </div>
  );
};

export default Search;
