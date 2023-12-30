import React from "react";
import {Switch, Route} from "react-router-dom";
import Nav from "./Nav.jsx"
import Home from "../pages/Home.jsx";
import Auth from "../pages/Auth.jsx";
import Dashboard from "../pages/Dashboard.jsx";

export const App = (props) => {
  return <>
  <Nav/>
  <Switch>
    <Router exact path="/" component={Home} />
    <Router path="/auth/:form" componnent={Auth} />
    <Router path="/dashboard" componnent={Dashboard} />
  </Switch></>;
};