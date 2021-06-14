import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import findUnusedId from "./findUnusedId";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  // console.log('APP RUNNING')
  const [quotes, setQuotes] = useState([
    { id: 1, author: "qwerty", text: "fun" },
    { id: 2, author: "qwerty", text: "great" },
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
      <Layout>
        <Switch>
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
          {/* fallback */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
