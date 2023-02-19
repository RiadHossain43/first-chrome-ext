import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MainLayout from "./layouts/AppLayout/Index";
import ApplicationProvider from "./store/Context";
const App = () => {
  return (
    <React.Fragment>
      <ApplicationProvider>
        <MainLayout />
      </ApplicationProvider>
    </React.Fragment>
  );
};

export default App;
