import { useEffect, useRef } from "react";
import useHttp from "../../hooks/use-http";

import classes from "./NewCommentForm.module.css";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = ({ onAddedComment, quoteId }) => {
  const commentTextRef = useRef();

  // sendRequest skal ha addComment tilgjengelig i sitt outer environment
  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;

    // sendRequest vil kjøre addComment({text:enteredText}, quoteId)
    sendRequest({ commentData: { text: enteredText }, quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
