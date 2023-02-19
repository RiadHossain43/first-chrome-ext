import { useState } from "react";
import useElementPicker from "../hooks/useElementPicker";
const stepskey = "react-step-builder-key";
export default function useBuilderStore() {
  const { selector, ...elementPickerRest } = useElementPicker();
  const [content, setContent] = useState("");
  function handleContentChange(value) {
    setContent(value);
  }
  function saveStep() {
    const oldData = localStorage.getItem(stepskey)
      ? JSON.parse(localStorage.getItem(stepskey))
      : [];
    localStorage.setItem(
      stepskey,
      JSON.stringify([
        ...oldData,
        {
          target: selector,
          content,
        },
      ])
    );
  }
  function clearSteps() {
    localStorage.clear(stepskey);
  }
  return {
    selector,
    handleContentChange,
    saveStep,
    clearSteps,
    ...elementPickerRest,
  };
}
