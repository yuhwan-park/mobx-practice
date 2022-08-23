import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { todoStore } from "./stores/TodoStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App todoStore={todoStore} />
  </React.StrictMode>
);

