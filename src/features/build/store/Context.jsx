import React from "react";
import useBuilderStore from "./useBuilderStore";
export const BuilderContext = React.createContext();
const BuilderProvider = ({ children }) => {
  const { ...store } = useBuilderStore();
  return (
    <BuilderContext.Provider
      value={{
        ...store,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};
export default BuilderProvider;
