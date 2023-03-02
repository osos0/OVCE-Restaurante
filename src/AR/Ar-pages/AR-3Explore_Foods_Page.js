import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ARNavs from "../componant/Ar-Nav/Ar-Nav";
import ARCards from "../componant/Card_Section/Ar-cards";
import ARFooters from "../componant/Ar-Footer/Ar-footers";

class Arexplore extends Component {
  render() {
    return (
      <Fragment>
        <ARNavs />
        <ARCards />
        <ARFooters />
      </Fragment>
    );
  }
}
export default Arexplore;
