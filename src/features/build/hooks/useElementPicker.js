import { useEffect, useState } from "react";
import { ElementPicker } from "@riadhossain43/dom-element-picker";
import { useScreenshot } from "use-react-screenshot";
import useApplication from "../../../store/useApplication";
import uniqueElementSelector from "unique-selector";
export default function useElementPicker() {
  const [snapShot, takeScreenshot] = useScreenshot();
  const [element, setElement] = useState(null);
  const [selector, setSelector] = useState("");
  const [image, setImage] = useState(null);
  const { openApplication, toggleApplication } = useApplication();
  useEffect(() => {
    openApplication();
  }, [element]);
  const picker = new ElementPicker({
    style: {
      background: "rgba(30,0,255,0.08)",
      borderColor: "#6610f2",
      borderWidth: "2px",
      borderRadius: "6px",
    },
  });
  function startSelection() {
    toggleApplication();
    picker.start({
      onHover: (el) => {},
      onClick: function (el) {
        setSelector(uniqueElementSelector(el));
        setElement(el);
        console.log(el);
        console.log(uniqueElementSelector(el));
        picker.stop();
      },
    });
  }
  function resetElementPicker() {
    setElement(null);
    setImage(null);
    setSelector("");
  }
  return {
    image,
    selector,
    element,
    startSelection,
    resetElementPicker,
  };
}
