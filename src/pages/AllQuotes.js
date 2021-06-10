import QuoteList from "./../components/quotes/QuoteList";
import NoQuotesFound from "./../components/quotes/QuoteList";

const AllQuotes = () => {
  const quotes = ''
  return (
    <div>
      <QuoteList props={quotes} />
      <NoQuotesFound />
    </div>
  );
};

export default AllQuotes;
