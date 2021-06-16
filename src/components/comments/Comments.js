import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";
import LoadingSpinner from "../UI/LoadingSpinner";

import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";

const Comments = ({ onAddCommentHandler }) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { quoteId } = params;

  // legg getAllComments til sendRequest's outer environment
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    // vil kjøre getAllComments(quoteId)
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  const addedCommentHandler = useCallback(() => {
    // vil kjøre getAllComments(quoteId)
    sendRequest(quoteId)
  }, [sendRequest, quoteId]);

  let comments;

  console.debug(status);

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments were added yet</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          onAddedComment={addedCommentHandler}
          quoteId={quoteId}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
