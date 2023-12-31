import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import {App} from "./components/App";
import {BrowserRouter as Router} from "react-router-dom";
import { AppState } from "./AppState.jsx";

ReactDom.render(
    <AppState>
        <Router>
            <App />
        </Router>
    </AppState>,
    document.querySelector("#root")
);