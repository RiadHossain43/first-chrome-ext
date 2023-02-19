import React from "react";
import MainLayout from "./layouts/AppLayout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ElementPicker } from "@riadhossain43/dom-element-picker";

const App = () => {
  // const [element, setElement] = useState(null);
  // const picker = new ElementPicker({
  //   style: {
  //     background: "transparent",
  //     borderColor: "#6610f2",
  //     borderWidth: "2px",
  //     borderRadius: "6px",
  //   },
  // });
  // const start = () => {
  //   picker.start({
  //     onHover: (el) => {
  //       setElement([el]);
  //     },
  //     onClick: () => {
  //       picker.stop();
  //     },
  //   });
  // };
  return (
    <React.Fragment>
      <MainLayout></MainLayout>
    </React.Fragment>
  );
};

export default App;
