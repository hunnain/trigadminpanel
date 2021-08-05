import React, { useState } from "react";
import SideNav from "../Components/SideNav/SideNav";
import TopNav from "../Components/TopNav/TopNav";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Setting from "../Pages/Setting/Setting";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "../AppRoutes/PublicRoute/PublicRoute";
import PrivateRoute from "../AppRoutes/PrivateRoute/PrivateRoute";

function AppRoutes() {
  const [show, setShow] = useState(true);

  const displayNav = () => setShow(true);
  const hideNav = () => setShow(false);
  return (
    <>
      <Router>
        {show ? <SideNav onClick={hideNav} /> : null}

        <TopNav onClick={displayNav} />

        <Switch>
          <PublicRoute exact path="/" component={Login}></PublicRoute>
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/Setting"
            component={Setting}
          ></PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default AppRoutes;
