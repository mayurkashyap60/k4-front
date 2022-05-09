import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { ContextProvider } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
