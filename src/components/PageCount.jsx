import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getArticlesCount } from "../utils/utils";

const PageCount = ({ selectedTopic, currentPage, setCurrentPage }) => {
  useEffect(() => {
    getArticlesCount(selectedTopic).then((res) => {
      setCurrentPage({ page: 1, maxPage: Math.ceil(res / 10) });
    });
  }, [selectedTopic]);

  const pageNumHandler = (num) => {
    setCurrentPage((currentValue) => ({ ...currentValue, page: num }));
    window.scrollTo(0, 0);
  };

  return (
    <div className="page-numbers">
      {Array.from({ length: currentPage.maxPage }, (v, i) => i + 1).map(
        (num) => {
          return (
            <button key={num} onClick={() => pageNumHandler(num)}>
              {num}
            </button>
          );
        }
      )}
    </div>
  );
};

export default PageCount;
