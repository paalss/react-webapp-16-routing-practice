import { useHistory } from "react-router-dom";
import QuoteForm from "./../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";

const AddQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  // Sjekk om status er completed, da vil vi navigere bort
  useEffect(() => {
    if (status === "completed") {
      history.push("/allQuotes");
    }
  }, [status, history]);
  
  const addQuoteHandler = (quote) => {
    sendRequest(quote);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default AddQuote;
