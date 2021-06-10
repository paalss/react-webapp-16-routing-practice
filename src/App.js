import { Redirect, Router } from "react-router";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <div>
      <main>
        <Router path="/">
          <Redirect to="/addQuote" />
        </Router>
        <Router path="/addQuote">
          <AddQuote />
        </Router>
        <Router path="/allQuotes">
          <AllQuotes />
        </Router>
        <Router path="/qallQuotes/:quoteDetails">
          <QuoteDetails />
        </Router>
      </main>
    </div>
  );
}

export default App;
