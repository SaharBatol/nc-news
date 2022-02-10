import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { shortDate } from "../utils/shortDate";
import { getArticles } from "../utils/utils";
import OrderBy from "./OrderBy";
import PageCount from "./PageCount";
import SortBy from "./SortBy";
import Topics from "./Topics";
import Votes from "./Votes";

const Articles = () => {
  const [articleList, setArticleList] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrderBy, setSelectedOrderBy] = useState("DESC");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getArticles(
      selectedTopic,
      selectedSortBy,
      selectedOrderBy,
      currentPage
    ).then((res) => {
      setArticleList(res);
    });
  }, [selectedTopic, selectedSortBy, selectedOrderBy, currentPage]);

  return (
    <div>
      <Topics
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
      <SortBy
        selectedSortBy={selectedSortBy}
        setSelectedSortBy={setSelectedSortBy}
      />
      <OrderBy
        selectedOrderBy={selectedOrderBy}
        setSelectedOrderBy={setSelectedOrderBy}
      />
      <ul>
        {articleList.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h2>{article.title}</h2>
                <h2>{article.author}</h2>
              </Link>
              <h3>Topic: {article.topic}</h3>
              <h3>Comments: {article.comment_count}</h3>
              <Votes votes={article.votes} article_id={article.article_id} />
              <p id="date">Posted at: {shortDate(article.created_at)}</p>
            </li>
          );
        })}
      </ul>
      <PageCount setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Articles;
