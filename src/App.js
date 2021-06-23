import { Route, Switch, Redirect } from "react-router";

import Layout from "./layout/Layout";
import MovieListing from "./pages/MovieListing";
import MovieDetails from "./pages/MovieDetails";
import HomePage from "./pages/HomePage";
import ShowListing from "./pages/ShowListing";
import ShowDetails from "./pages/ShowDetails";

import "./App.css";
import Auth from "./pages/Auth";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/homepage" />
        </Route>
        <Route path="/movies" exact>
          <MovieListing />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
        <Route path="/homepage">
          <HomePage />
        </Route>
        <Route path="/shows" exact>
          <ShowListing />
        </Route>
        <Route path="/shows/:showId">
          <ShowDetails />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
