import QuoteForm from "./../components/quotes/QuoteForm";

const AddQuote = ({ updateQuotes }) => {
  const addQuoteHandler = (quote) => {
    updateQuotes(quote);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default AddQuote;
