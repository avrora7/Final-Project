import React from "react";
// javascript plugin used to create scrollbars on windows
//import { Route } from "react-router-dom";

//import staticRoutes from "routes/static.jsx";

//var ps;

class StaticPage extends React.Component {
  componentDidMount() {
    // if (navigator.platform.indexOf("Win") > -1) {
    //   ps = new PerfectScrollbar(this.refs.mainPanel);
    //   document.body.classList.toggle("perfect-scrollbar-on");
    // }
  }
  componentWillUnmount() {
    // if (navigator.platform.indexOf("Win") > -1) {
    //   ps.destroy();
    //   document.body.classList.toggle("perfect-scrollbar-on");
    // }
  }
  componentDidUpdate(e) {
    // if (e.history.action === "PUSH") {
    //   this.refs.mainPanel.scrollTop = 0;
    //   document.scrollingElement.scrollTop = 0;
    // }
  }
  render() {
    return (
      <div className="container-fluid">
        <h1>Hello</h1>
        <button className="btn btn-primary">Click Me</button>
        Hello
          {/* <Route path={prop.path} component={prop.component} key={key} /> */}
          {/* <Footer fluid /> */}
      </div>
    );
  }
}

export default StaticPage;
