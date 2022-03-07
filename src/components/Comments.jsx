import React, { useEffect } from "react";
import { useState } from "react";
import { shortDate } from "../utils/shortDate";

import { getCommentsById } from "../utils/utils";
import CreateComment from "./CreateComment";
import DeleteComment from "./DeleteComment";
import Votes from "./Votes";

const Comments = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);
  const [deletedComment, setDeletedComment] = useState(false);

  useEffect(() => {
    getCommentsById(article_id).then((res) => {
      setArticleComments(res);
      setDeletedComment(false);
    });
  }, [deletedComment, setArticleComments]);

  return (
    <div>
      <CreateComment
        setArticleComments={setArticleComments}
        article_id={article_id}
      />
      <ul>
        {articleComments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <div className="line"></div>
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
              <div>
                <Votes
                  component_name={"comments"}
                  votes={comment.votes}
                  component_id={comment.comment_id}
                />
                <a>Posted on: {shortDate(comment.created_at)}</a>
              </div>
              <DeleteComment
                setDeletedComment={setDeletedComment}
                setArticleComments={setArticleComments}
                author={comment.author}
                comment_id={comment.comment_id}
              />
              <div className="line"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
