import React, { Component, Fragment } from "react";
import Navs from "./componant/Header/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./componant/Header/Home";
import Cards from "./componant/Card_Section/cards";
import Slides from "./componant/Header/slides";
import Footers from "./componant/Header/footers";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navs />
        <Home />
        <Cards />
        <Slides />
        <Footers />
      </Fragment>
    );
  }
}
export default App;
