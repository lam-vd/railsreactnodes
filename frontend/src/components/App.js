import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import Home from "../pages/Home.jsx";
import Auth from "../pages/Auth.jsx";
import Dashboard from "../pages/Dashboard.jsx";

export const App = (props) => {
  return (
  <>
    <Nav />
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/auth/:form" component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
    </Routes>
  </>
  );
};