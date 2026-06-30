import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./app/providers/router";
import { Provider } from "react-redux";
import { store } from "./app/providers/StoreProvider/store";

import "./app/styles/normalize.css";
import "./app/styles/global.css";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>  
    <Provider store={store}>
    <AppRouter/>
    </Provider>
  </React.StrictMode>,
);
