import HighlightedQuote from "../components/quotes/HighlightedQuote"


const QuoteDetails = () => {
  const text = 'bæ'
  const author = 'bæ'
  return <div>
    <section>
      <HighlightedQuote text={text} author={author}/>
    </section>
    <button>Load comments</button>
  </div>;
};

export default QuoteDetails;
