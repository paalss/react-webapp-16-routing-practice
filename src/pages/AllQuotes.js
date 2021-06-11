import QuoteList from "./../components/quotes/QuoteList";
import NoQuotesFound from "./../components/quotes/QuoteList";

const AllQuotes = ({ quotes }) => {
  // console.log("ALLQUOTES RUNNING");
  const content =
    quotes.length !== 0 ? <QuoteList quotes={quotes} /> : <NoQuotesFound />;
  return <div>{content}</div>;
};

export default AllQuotes;
