import { useContext } from "react";
import { ApplicationContext } from "./Context";
export default function useApplication() {
  const { ...store } = useContext(ApplicationContext);
  return {
    ...store,
  };
}
