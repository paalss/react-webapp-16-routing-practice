import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// Spar importeringen til når man navigerer dit
const AllQuotes = lazy(() => import("./pages/AllQuotes"));
const AddQuote = lazy(() => import("./pages/AddQuote"));
const QuoteDetails = lazy(() => import("./pages/QuoteDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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
      </Suspense>
    </Layout>
  );
}

export default App;
