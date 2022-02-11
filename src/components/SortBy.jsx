import React from "react";

const SortBy = ({ setSelectedSortBy }) => {
  const sortByHandler = (event) => {
    setSelectedSortBy(event.target.value);
  };

  return (
    <div className="sortby">
      <select onChange={sortByHandler} name="" id="query">
        <option value="created_at"> Posted at</option>
        <option value="title">Name</option>
        <option value="votes">Popularity</option>
        <option value="author">Author</option>
        <option value="comment_count">Comments</option>
      </select>
    </div>
  );
};

export default SortBy;
