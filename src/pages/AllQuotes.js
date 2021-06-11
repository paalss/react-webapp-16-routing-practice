import QuoteList from "./../components/quotes/QuoteList";
import NoQuotesFound from "./../components/quotes/QuoteList";

const AllQuotes = () => {
  // console.log("ALLQUOTES RUNNING");
  const quotes = [
    { id: 1, author: "katjakaj", text: "eeeee" },
    { id: 2, author: "bentabent", text: "eeeee" },
  ];
  console.log(quotes.length);
  const content =
    quotes.length !== 0 ? <QuoteList quotes={quotes} /> : <NoQuotesFound />;
  return <div>{content}</div>;
};

export default AllQuotes;
