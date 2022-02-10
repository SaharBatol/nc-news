import React from "react";

const SortBy = ({ selectedSortBy, setSelectedSortBy }) => {
  const sortByName = {
    title: "Name",
    votes: "Popularity",
    author: "Author",
    comment_count: "Comments",
    created_at: "Posted At",
  };

  const sortByHandler = (sort_by) => {
    setSelectedSortBy(sort_by);
  };

  return (
    <div className="dropdown">
      <button className="dropbutton">
        {selectedSortBy.length ? sortByName[selectedSortBy] : "Unselected"}
      </button>
      <div className="dropdown-content">
        <a onClick={() => sortByHandler("created_at")}>Posted at</a>
        <a onClick={() => sortByHandler("title")}>Name</a>
        <a onClick={() => sortByHandler("votes")}>Popularity</a>
        <a onClick={() => sortByHandler("author")}>Author</a>
        <a onClick={() => sortByHandler("comment_count")}>Comments</a>
      </div>
    </div>
  );
};

export default SortBy;
