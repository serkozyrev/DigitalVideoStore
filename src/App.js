import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router";

import Layout from "./layout/Layout";
import MovieListing from "./pages/MovieListing";
import MovieDetails from "./pages/MovieDetails";
import HomePage from "./pages/HomePage";
import ShowListing from "./pages/ShowListing";
import ShowDetails from "./pages/ShowDetails";
import AuthContext from "./components/context/auth-context";
import Profile from "./pages/Profile";

import "./App.css";
import Auth from "./pages/Auth";

function App() {
  const authCtx = useContext(AuthContext);

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
        <Route path="/profile">
          {authCtx.isLoggedIn && <Profile id={authCtx.username} />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth" exact>
            <Auth />
          </Route>
        )}
        {authCtx.isLoggedIn && <Redirect to="/" />}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
