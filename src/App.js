import { Redirect, Route, Switch } from "react-router-dom";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/addQuote" />
          </Route>
          <Route path="/addQuote">
            <AddQuote />
          </Route>
          <Route path="/allQuotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/allQuotes/:quoteId">
            <QuoteDetails />
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
