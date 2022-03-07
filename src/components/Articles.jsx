import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { shortDate } from "../utils/shortDate";
import { getArticles } from "../utils/utils";
import OrderBy from "./OrderBy";
import PageCount from "./PageCount";
import SortBy from "./SortBy";
import Topics from "./Topics";
import Votes from "./Votes";

const Articles = () => {
  const { setLoggedInUser } = useContext(UserContext);
  const [articleList, setArticleList] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrderBy, setSelectedOrderBy] = useState("ASC");
  const [currentPage, setCurrentPage] = useState({ page: 1, maxPage: 1 });

  let navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser({});
    routeChange("/");
  };

  useEffect(() => {
    getArticles(
      selectedTopic,
      selectedSortBy,
      selectedOrderBy,
      currentPage.page
    ).then((res) => {
      setArticleList(res);
    });
  }, [selectedTopic, selectedSortBy, selectedOrderBy, currentPage]);

  return (
    <div>
      <div className="filter">
        <Link to="/" onClick={handleLogout} id="logout">
          Logout
        </Link>
        <Topics
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
        <SortBy setSelectedSortBy={setSelectedSortBy} />
        <OrderBy setSelectedOrderBy={setSelectedOrderBy} />
      </div>

      {articleList.length ? (
        <div>
          <p id="pages">{`Page: ${currentPage.page} / ${currentPage.maxPage}`}</p>
          <ul className="articles-wrapper">
            {articleList.map((article) => {
              return (
                <li key={article.article_id}>
                  <Link
                    className="article-titles"
                    to={`/articles/${article.article_id}`}
                  >
                    <h2>{article.title}</h2>
                    <h2>{article.author}</h2>
                  </Link>
                  <h3>Topic: {article.topic}</h3>
                  <h3>Comments: {article.comment_count}</h3>
                  <Votes
                    component_name={"articles"}
                    votes={article.votes}
                    component_id={article.article_id}
                  />
                  <p id="date">Posted at: {shortDate(article.created_at)}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <PageCount
        selectedTopic={selectedTopic}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Articles;
