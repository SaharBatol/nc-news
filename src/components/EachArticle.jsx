import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { shortDate } from "../utils/shortDate";
import { getArticleByArticleId } from "../utils/utils";
import Comments from "./Comments";
const EachArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleByArticleId(article_id).then((res) => {
      setArticle(res);
    });
  }, []);

  return (
    <>
      <div>
        <h3>Topic {article.topic}</h3>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <a id="votes">Votes: {article.votes}</a>
        <a id="date">Posted on: {shortDate(article.created_at)}</a>
      </div>
      <Comments article_id={article_id} />
    </>
  );
};

export default EachArticle;