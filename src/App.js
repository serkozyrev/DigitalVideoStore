import React, { useContext, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router";

import Layout from "./layout/Layout";
import LoadingSpinner from "./layout/LoadingSpinner";
const MovieListing = React.lazy(() => import("./pages/MovieListing"));
const MovieDetails = React.lazy(() => import("./pages/MovieDetails"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const ShowListing = React.lazy(() => import("./pages/ShowListing"));
const ShowDetails = React.lazy(() => import("./pages/ShowDetails"));
import AuthContext from "./components/context/auth-context";
const Profile = React.lazy(() => import("./pages/Profile"));

import "./App.css";
const Auth = React.lazy(() => import("./pages/Auth"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));

function App() {
  const authCtx = useContext(AuthContext);

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
            <Route path="/authorization" exact>
              <Auth />
            </Route>
          )}<Route path="/about">
            <AboutPage />
          </Route>
          {authCtx.isLoggedIn && <Redirect to="/" />}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
