import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "./../components/quotes/QuoteForm";

const AddQuote = ({ updateQuotes }) => {

  const history = useHistory()

  const addQuoteHandler = (quote) => {
    updateQuotes(quote);

    history.push('/allQuotes')
  };
  
  return (
    <Fragment>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </Fragment>
  );
};

export default AddQuote;
