import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { shortDate } from "../utils/shortDate";
import { getArticleByArticleId } from "../utils/utils";
import Comments from "./Comments";
import Votes from "./Votes";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";

const EachArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const { setLoggedInUser } = useContext(UserContext);

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
    getArticleByArticleId(article_id).then((res) => {
      setArticle(res);
    });
  }, []);

  return (
    <div className="article-container">
      <Link to="/" onClick={handleLogout} id="logout">
        Logout
      </Link>
      <div className="eachArticle">
        <h2>{article.title}</h2>
        <h3>User: {article.author}</h3>
        <h3>Topic: {article.topic}</h3>
        <p>{article.body}</p>

        <a id="date">Posted on: {shortDate(article.created_at)}</a>
      </div>
      <Comments article_id={article_id} />
    </div>
  );
};

export default EachArticle;
