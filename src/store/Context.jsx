import React from "react";
import useApplicationStore from "./useApplicationStore";
export const ApplicationContext = React.createContext();
const ApplicationProvider = ({ children }) => {
  const { ...store } = useApplicationStore();
  return (
    <ApplicationContext.Provider
      value={{
        ...store,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
export default ApplicationProvider;
