import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import setColourState from "./components/reducers/setColourState";
import { Provider } from "react-redux";

// STORE -> GLOBALIZED STATE
let myStore = createStore(setColourState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render( 
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={myStore}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

