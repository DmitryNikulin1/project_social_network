import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Store } from "./Redux/Store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App appStore={Store} />
    </BrowserRouter>
  </React.StrictMode>
);
