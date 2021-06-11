import { useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetails = ({ quotes }) => {
  const params = useParams()
  const quoteId = params.quoteId

  const quote = quotes.find(x => x.id === parseInt(quoteId))
  return (
    <div>
      <section>
        <HighlightedQuote text={quote.text} author={quote.author} />
      </section>
      <button>Load comments</button>
    </div>
  );
};

export default QuoteDetails;
