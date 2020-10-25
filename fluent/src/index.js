import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/react-demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

// LINE 13 CAUSES SCROLLING NOT TO WORK
import "assets/css/now-ui-dashboard.css";
import "assets/css/demo.css";

// pages
import AboutUs from "views/examples/AboutUs.js";

import LoginPage from "views/examples/LoginPage.js";

import SignupPage from "views/examples/SignupPage.js";

import UploadSpeech from "views/examples/UploadSpeech.js";
import AnalyzeSpeech from "views/examples/AnalyzeSpeech.js";
import Logout from "components/Navbars/Logout.js";

import AdminLayout from "layouts/Admin.js";
import Dashboard from "views/Dashboard"

// import Dashboard from "Dashboard.js"
// others

const hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={hist}>
    <Switch>
      <Route path="/upload" render={(props) => <UploadSpeech {...props} />} />
      <Route path="/analyze" render={(props) => <AnalyzeSpeech {...props} />} />

      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      
      <Route exact path="/logout" component={Logout} />
      
      <Route
        path="/signup-page"
        render={(props) => <SignupPage {...props} />}
      />

      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />

      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/admin/dashboard" />
      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
