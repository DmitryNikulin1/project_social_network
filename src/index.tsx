import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { setupStore } from "./Redux/redux_store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const reduxStore = setupStore();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={reduxStore}>
        <App appStore={store} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
