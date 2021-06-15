import { useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import CommentsList from "../components/comments/CommentsList";
import findUnusedId from "../findUnusedId";

const QuoteDetails = ({ quotes }) => {
  const [comments, setComments] = useState([
    { id: 1, text: "first!" },
    { id: 2, text: "second!" },
  ]);
  const params = useParams();
  const quoteId = params.quoteId;

  const quote = quotes.find((quote) => quote.id === parseInt(quoteId));

  const onAddCommentHandler = (text) => {
    const id = findUnusedId(comments);
    setComments((prevState) => {
      return [...prevState, { id: id, text: text }];
    });
  };

  return (
    <div>
      <section>
        <HighlightedQuote text={quote.text} author={quote.author} />
      </section>
      
      <div className="centered">
        <Route path="/allQuotes/:quoteId" exact>
          <Link to={`/allQuotes/${quoteId}/comments`} className="btn--flat">
            Load comments
          </Link>
        </Route>
      </div>

      <Route path={"/allQuotes/:quoteId/comments"}>
        <Comments onAddCommentHandler={onAddCommentHandler} />
        <CommentsList comments={comments} />
      </Route>
    </div>
  );
};

export default QuoteDetails;
