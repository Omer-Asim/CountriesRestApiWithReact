import React from "react";
import ReactDOM from "react-dom";
import Deneme from "./components/Deneme";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Icerik from "./components/Icerik";

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <Deneme />
    </Route>

    <Route path="/detay/:id">
      <Icerik />
    </Route>
  </Router>,

  document.getElementById("root")
);
