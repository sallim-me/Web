import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
