import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import UploadFixedNavbar from "../components/Navbars/UploadFixedNavbar"

// reactstrap components
import { Route, Switch, Redirect } from "react-router-dom";

import routes from "../routes.js";

var ps;

class Dashboard extends React.Component {
  state = {
    backgroundColor: "blue",
  };
  mainPanel = React.createRef();
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.mainPanel.current.scrollTop = 0;
    }
  }
  render() {
    return (
      <div className="wrapper">
        <UploadFixedNavbar />
        <div className="main-panel" ref={this.mainPanel} style={{width: '100%', paddingTop: 85}}>
          {/* <DemoNavbar {...this.props} /> */}
          
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          {/* <Footer fluid /> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
