import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const App = () => {
  return (
    <MDBContainer>
      <h4>Hello world</h4>
      <p>
        This is our very own chrome extension application. We will start the
        development from here.
      </p>
    </MDBContainer>
  );
};

export default App;
