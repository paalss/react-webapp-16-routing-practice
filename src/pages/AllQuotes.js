import { useState } from "react";
import Card from "../components/UI/Card";
import QuoteList from "./../components/quotes/QuoteList";
import NoQuotesFound from "./../components/quotes/QuoteList";

const AllQuotes = ({ quotes }) => {
  const [isAscending, setIsAscending] = useState(true);

  let buttonText = isAscending ? "Ascending" : "descending";

  const clickHandler = () => {
    setIsAscending((prevState) => {
      return !prevState;
    });
  };

  let sortedQuotes = "";
  if (isAscending) {
    sortedQuotes = quotes.sort((a, b) =>
      a.text > b.text ? 1 : b.text > a.text ? -1 : 0
    );
  } else {
    sortedQuotes = quotes.sort((b, a) =>
      a.text > b.text ? 1 : b.text > a.text ? -1 : 0
    );
  }

  const content =
    quotes.length !== 0 ? (
      <QuoteList quotes={sortedQuotes} />
    ) : (
      <NoQuotesFound />
    );

  return (
    <Card>
      <button className="btn" onClick={clickHandler}>
        {buttonText}
      </button>
      {content}
    </Card>
  );
};

export default AllQuotes;
