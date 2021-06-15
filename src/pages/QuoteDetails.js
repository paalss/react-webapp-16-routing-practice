import { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import CommentsList from "../components/comments/CommentsList";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetails = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <div>
      <section>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      </section>

      <div className="centered">
        <Route path={match.path} exact>
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load comments
          </Link>
        </Route>
      </div>

      <Route path={`${match.path}/comments`}>
        {/* <Comments onAddCommentHandler={onAddCommentHandler} />
        <CommentsList comments={comments} /> */}
      </Route>
    </div>
  );
};

export default QuoteDetails;
