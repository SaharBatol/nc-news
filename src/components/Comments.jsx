import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { shortDate } from "../utils/shortDate";
import { deleteComment, getCommentsById } from "../utils/utils";
import CreateComment from "./CreateComment";

const Comments = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);
  const [deletedCommentId, setDeletedCommentId] = useState(0);

  useEffect(() => {
    getCommentsById(article_id).then((res) => {
      setArticleComments(res);
      setDeletedCommentId(0);
    });
  }, [deletedCommentId]);

  return (
    <div>
      <CreateComment
        setDeletedCommentId={setDeletedCommentId}
        article_id={article_id}
      />
      <ul>
        {articleComments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
              <div>
                <a>Votes: {comment.votes}</a>
                <a>Posted on: {shortDate(comment.created_at)}</a>
              </div>
              <deleteComment
                setDeletedCommentId={setDeletedCommentId}
                setArticleComments={setArticleComments}
                author={comment.author}
                comment_id={comment.comment_id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
