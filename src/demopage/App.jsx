import React, { useEffect } from "react";
import {
  Container,
  CardContent,
  CardActions,
  Button,
  TextField,
  Card,
  Typography,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  return (
    <Container>
      <Card>
        <CardContent>
          <img
            width={500}
            src="https://imssystems.tech/static/assets/images/ims-technologies-official.png"
          />
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sed
            aliquam quae harum saepe hic dolore repellat asperiores sint illo
            distinctio corporis officia assumenda suscipit illum aut, omnis
            reiciendis! Saepe.
          </Typography>
          <TextField
            size="sm"
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            size="sm"
            margin="normal"
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </CardContent>
        <CardActions>
          <Button className="first-step" size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default App;
