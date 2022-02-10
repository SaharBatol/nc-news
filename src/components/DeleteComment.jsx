import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../utils/utils";

const DeleteComment = ({ setDeletedCommentId, comment_id, author }) => {
  const { currentUser } = useContext(UserContext);

  const deleteHandler = () => {
    deleteComment(comment_id);
    setDeletedCommentId(comment_id);
  };

  const isCurrentUserCheck = () => {
    if (author === currentUser.username) {
      return <button onClick={() => deletedHandler(comment_id)}>Delete</button>;
    } else {
      return <></>;
    }
  };

  return isCurrentUserCheck();
};

export default DeleteComment;
