import { useState } from "react";
import { Redirect, Route } from "react-router-dom";
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
    setQuotes((prevState) => {
      return [...prevState, quote];
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
        <Route path="/allQuotes/:quoteDetails">
          <QuoteDetails />
        </Route>
      </main>
    </div>
  );
}

export default App;
