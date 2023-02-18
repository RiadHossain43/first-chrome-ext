import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ElementPicker } from "@riadhossain43/dom-element-picker";
const App = () => {
  const [element, setElement] = useState(null);
  const picker = new ElementPicker({
    style: {
      background: "transparent",
      borderColor: "#6610f2",
      borderWidth: "2px",
      borderRadius: "6px",
    },
  });
  const start = () => {
    picker.start({
      onHover: (el) => {
        setElement([el]);
      },
      onClick: () => {
        picker.stop();
      },
    });
  };
  return (
    <MDBContainer>
      <MDBBtn onClick={start}>Start</MDBBtn>
    </MDBContainer>
  );
};

export default App;
