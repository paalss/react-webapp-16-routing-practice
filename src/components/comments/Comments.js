import { useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = ({ onAddCommentHandler }) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentHandler = (text) => {
    onAddCommentHandler(text);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm addCommentHandler={addCommentHandler} />
      )}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
