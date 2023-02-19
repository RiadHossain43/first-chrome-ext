import React from "react";
import { Tab, Tabs, Box, Container } from "@mui/material";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
const ManinMenu = ({ features = [] }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Tabs
        value={value}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{ border: 1, borderColor: "divider", mb: 2 }}
        onChange={handleChange}
      >
        {features.map((feature, index) => {
          return (
            <Tab
              key={index + feature.name}
              label={feature.name}
              {...a11yProps(index)}
            />
          );
        })}
      </Tabs>
      <Container>
        {features.map((feature, index) => {
          return (
            <TabPanel key={index + feature.name} value={value} index={index}>
              {feature.component}
            </TabPanel>
          );
        })}
      </Container>
    </React.Fragment>
  );
};

export default ManinMenu;
