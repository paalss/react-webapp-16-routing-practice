import { Fragment, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import CommentsList from "../components/comments/CommentsList";
import findUnusedId from "../findUnusedId";

const QuoteDetails = ({ quotes }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, text: "first!" },
    { id: 2, text: "second!" },
  ]);
  const params = useParams();
  const quoteId = params.quoteId;

  const quote = quotes.find((x) => x.id === parseInt(quoteId));

  const showCommentsHandler = () => {
    setShowComments(true);
  };

  const onAddCommentHandler = (text) => {
    const id = findUnusedId(comments)
    setComments((prevState) => {
      return [...prevState, {id: id, text: text}];
    });
  };

  return (
    <div>
      <section>
        <HighlightedQuote text={quote.text} author={quote.author} />
      </section>
      {showComments ? (
        <Fragment>
          <Comments onAddCommentHandler={onAddCommentHandler} />
          <CommentsList comments={comments} />
        </Fragment>
      ) : (
        <button className="btn" onClick={showCommentsHandler}>
          Load comments
        </button>
      )}
    </div>
  );
};

export default QuoteDetails;
