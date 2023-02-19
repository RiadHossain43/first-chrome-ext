import { useContext } from "react";
import { BuilderContext } from "./Context";
export default function useBuilder() {
  const { ...store } = useContext(BuilderContext);
  return {
    ...store,
  };
}
