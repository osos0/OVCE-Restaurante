import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import ARNavs from "./componant/Ar-Nav/Ar-Nav";
import ARNavs from "../componant/Ar-Nav/Ar-Nav";
import ARHome from "../componant/Ar-Home/Ar-Home";
import ARFooters from "../componant/Ar-Footer/Ar-footers";

class ARAbout extends Component {
  render() {
    return (
      <Fragment>
        <ARNavs />
        <ARHome />
        <ARFooters />
      </Fragment>
    );
  }
}
export default ARAbout;
