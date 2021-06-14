import { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import QuoteForm from "./../components/quotes/QuoteForm";

const AddQuote = ({ updateQuotes }) => {
  const [goToAllquotes, setGoToAllQuotes] = useState(false);

  const addQuoteHandler = (quote) => {
    updateQuotes(quote);
    setGoToAllQuotes(true)
  };
  
  return (
    <Fragment>
      <QuoteForm onAddQuote={addQuoteHandler} />
      {goToAllquotes && <Redirect to="/allQuotes"/>}
    </Fragment>
  );
};

export default AddQuote;
