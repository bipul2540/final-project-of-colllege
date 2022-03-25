import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./component/StateProvider";
import reducer, { initialSate } from "./component/reducer";

ReactDOM.render(
  <BrowserRouter>
    <StateProvider initialState={initialSate} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
