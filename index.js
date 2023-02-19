import React from "react";
import ReactDom from "react-dom/client";
import App from "./src/App";
import DemoPage from "./src/demopage/App";
import { rootElement } from "./src/page-setup";
const root = ReactDom.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
if (process.env.REACT_APP_ENV === "development") {
  document.getElementById("react-chrome-app-007").classList.add("visible");
  const root = ReactDom.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <DemoPage />
    </React.StrictMode>
  );
}
