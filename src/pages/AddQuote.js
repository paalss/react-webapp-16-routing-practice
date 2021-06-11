import QuoteForm from "./../components/quotes/QuoteForm";

const AddQuote = ({ updateQuotes }) => {
  const addQuoteHandler = (quote) => {
    updateQuotes(quote);
  };
  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default AddQuote;
