import React from "react";
import ReactDOM from "react-dom";
import "./style/reset.css";
import App from "./App";
import { GlobalStyle } from "./style";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
