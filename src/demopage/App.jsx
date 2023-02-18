import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBInput,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const App = () => {
  return (
    <MDBContainer>
      <MDBCard className="m-5 w-50">
        <MDBCardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sed
            aliquam quae harum saepe hic dolore repellat asperiores sint illo
            distinctio corporis officia assumenda suscipit illum aut, omnis
            reiciendis! Saepe.
          </p>
          <MDBInputGroup className="mb-2">
            <MDBInput placeholder="Please type what I say..." />
          </MDBInputGroup>
          <MDBBtn>Click me</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default App;
