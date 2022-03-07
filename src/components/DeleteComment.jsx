import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../utils/utils";

const DeleteComment = ({ setDeletedComment, comment_id, author }) => {
  const { loggedInUser } = useContext(UserContext);

  const deleteHandler = () => {
    deleteComment(comment_id);
    setDeletedComment(true);
  };

  const isCurrentUserCheck = () => {
    if (author === loggedInUser.username) {
      return (
        <button
          className="delete-btn"
          onClick={() => deleteHandler(comment_id)}
        >
          Delete
        </button>
      );
    } else {
      return <></>;
    }
  };

  return isCurrentUserCheck();
};

export default DeleteComment;
