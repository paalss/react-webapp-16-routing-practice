import { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import findUnusedId from "./findUnusedId";
import MainNavigation from "./components/layout/MainNavigation";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  // console.log('APP RUNNING')
  const [quotes, setQuotes] = useState([
    { id: 1, author: "katjakaj", text: "rerer" },
    { id: 2, author: "bentabent", text: "eeeee" },
  ]);

  const addQuoteHandler = (quote) => {
    const id = findUnusedId(quotes);

    const quoteWithId = { id: id, ...quote };

    setQuotes((prevState) => {
      return [...prevState, quoteWithId];
    });
  };
  return (
    <div>
      <header>
        <MainNavigation />
      </header>
      <main>
        <Route path="/" exact>
          <Redirect to="/addQuote" />
        </Route>
        <Route path="/addQuote">
          <AddQuote updateQuotes={addQuoteHandler} />
        </Route>
        <Route path="/allQuotes" exact>
          <AllQuotes quotes={quotes} />
        </Route>
        <Route path="/allQuotes/:quoteId">
          <QuoteDetails quotes={quotes} />
        </Route>
      </main>
    </div>
  );
}

export default App;
