export default function useApplicationStore() {
  function minimiseApplication() {
    document.getElementById("react-chrome-app-007")?.classList.remove("visible");
  }
  function openApplication() {
    document
      .getElementById("react-chrome-app-007")
      ?.classList.add("visible");
  }
  function toggleApplication() {
    document
      .getElementById("react-chrome-app-007")
      ?.classList.toggle("visible");
  }
  function isApplicationOpen() {
    return document
      .getElementById("react-chrome-app-007")
      ?.classList.contains("visible");
  }
  return {
    isApplicationOpen,
    minimiseApplication,
    toggleApplication,
    openApplication,
  };
}
