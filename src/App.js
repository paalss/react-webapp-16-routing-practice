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

  const findUnusedQuoteId = () => {
    function next(prop) {
      return function (arr) {
        var used = arr.reduce(function (o, v) {
          o[v[prop]] = true;
          return o;
        }, {});
        for (var i = 1; used[i]; i++);
        return i;
      };
    }
    var nextId = next("id");

    return nextId(quotes);
  };

  const addQuoteHandler = (quote) => {
    const id = findUnusedQuoteId();

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
        <Route path="/allQuotes/:quoteDetails">
          <QuoteDetails />
        </Route>
      </main>
    </div>
  );
}

export default App;
