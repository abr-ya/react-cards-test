import React from "react";
import { Home } from "./pages";
import Nav from "components/Nav/Nav";
import "./App.scss";

const App = (): JSX.Element => (
  <>
    <div className="container">
      <Nav />
    </div>
    <Home />
  </>
);

export default App;
