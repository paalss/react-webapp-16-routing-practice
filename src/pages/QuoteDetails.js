import { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import useHttp from "../hooks/use-http";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getSingleQuote } from "../lib/api";

const QuoteDetails = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  // sendRequest skal ha getSingleQuote tilgjengelig i sitt outer environment
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    // vil kjøre getSingleQuote(quoteId)
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

  // Får hentet quotes, rendre det
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
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;
