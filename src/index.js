import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import SimpleAccordion from "views/examples/Dashboard.js";
import Dashboard from "views/examples/Dashboard";
import PrivateOwnerPage from "views/examples/PrivateOwner";
import Checkout from "views/IndexSections/Checkout";
import StepForm from "views/examples/BrokerPage";
import PrivateOwnerNew from "views/examples/PrivateOwnerNew";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/dashboard"
        render={props => <Dashboard {...props} />}
      />
      <Route
        path="/private-owner"
        render={props => <PrivateOwnerNew {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/broker-page"
        render={props => <StepForm {...props} />}
      />
      <Route
        path="/checkout"
        render={props => <Checkout {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
