import React from "react";
import BuilderProvider from "./store/Context";
import Content from "./Content";
const Builder = () => {
  return (
    <BuilderProvider>
      <Content />
    </BuilderProvider>
  );
};
const feature = [
  {
    name: (
      <span>
        <i className="fa-solid fa-hammer" /> Build
      </span>
    ),
    component: <Builder />,
  },
];
export default feature;
