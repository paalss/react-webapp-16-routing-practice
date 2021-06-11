import { Redirect, Route } from "react-router-dom";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  // console.log('APP RUNNING')
  return (
    <div>
      <main>
        <Route path="/" exact>
          <Redirect to="/addQuote" />
        </Route>
        <Route path="/addQuote">
          <AddQuote />
        </Route>
        <Route path="/allQuotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/allQuotes/:quoteDetails">
          <QuoteDetails />
        </Route>
      </main>
    </div>
  );
}

export default App;
