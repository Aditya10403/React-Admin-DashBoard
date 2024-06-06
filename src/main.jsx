import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./context/contextApi";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
