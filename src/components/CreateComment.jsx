import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { postCommentByArticleId } from "../utils/utils";

const CreateComment = ({ setArticleComments, article_id }) => {
  const { loggedInUser } = useContext(UserContext);

  const commentHandler = (event) => {
    event.preventDefault();
    let comment = event.target.comment.value;
    postCommentByArticleId(article_id, loggedInUser.username, comment).then(
      (res) => {
        setArticleComments((currentComments) => [res, ...currentComments]);
        event.target.comment.value = "";
      }
    );
  };

  return (
    <div>
      <form onSubmit={commentHandler}>
        <label>
          Comment: <input type="text" id="comment" required></input>
        </label>
        <button>Comment</button>
      </form>
    </div>
  );
};

export default CreateComment;
