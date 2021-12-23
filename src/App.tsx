import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { About, Home, Error404, ApiTest, SagaTest } from "./pages";
import Nav from "components/Nav/Nav";
import "./App.scss";

const App = (): JSX.Element => (
  <BrowserRouter basename="/">
    <div className="container">
      <Nav />
    </div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/api" component={ApiTest} />
      <Route path="/saga" component={SagaTest} />
      <Route path="/404" component={Error404} />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default App;
