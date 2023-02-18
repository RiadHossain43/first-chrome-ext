import React from "react";
import ReactDom from "react-dom/client";
import App from "./src/App";
import { rootElement } from "./src/page-setup";
const root = ReactDom.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
