import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";

import QuoteForm from "./../components/quotes/QuoteForm";
import { addQuote } from "../lib/api";

const AddQuote = () => {
  // sendRequest skal ha addQuote tilgjengelig i sitt outer environment
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  // Sjekk om status er completed, da vil vi navigere bort
  useEffect(() => {
    if (status === "completed") {
      history.push("/allQuotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quote) => {
    // vil kjøre addQuote(quote)
    sendRequest(quote);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default AddQuote;
