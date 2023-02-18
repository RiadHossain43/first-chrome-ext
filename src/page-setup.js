import { globalStyle } from "./assets/css/index.js";
/** style handling */
const globalStyleElement = document.createElement("style");
document.head.append(globalStyleElement);
globalStyleElement.innerHTML = globalStyle;
/** font handling  */
const fontRobotoLink = document.createElement("link");
fontRobotoLink.href =
  "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";
fontRobotoLink.rel = "stylesheet";
document.head.appendChild(fontRobotoLink);
/** root element handling */
export const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app-007";
// rootElement.classList.add("d-none");
/** html handling */
document.body.appendChild(rootElement);
