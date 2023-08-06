import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LoadingContextProvider from "./components/LoadingContextProvider";
import ThemeProvider from "./components/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <LoadingContextProvider>
        <App />
      </LoadingContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
