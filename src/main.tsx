import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./components/reducers/store"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render( 
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={configureStore}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

