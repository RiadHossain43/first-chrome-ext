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
const iconsetLink = document.createElement("link");
iconsetLink.rel = "stylesheet";
iconsetLink.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css";
iconsetLink.crossorigin = "anonymous";
iconsetLink.referrerpolicy = "no-referrer";

document.head.appendChild(fontRobotoLink);
document.head.appendChild(iconsetLink);
/** root element handling */
export const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app-007";
/** html handling */
document.body.appendChild(rootElement);
