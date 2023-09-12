import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import useBuilder from "./store/useBuilder";
import Joyride from "react-joyride";
const stepkey = "react-step-builder-key";

function downloadImage(url) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const downloadUrl = window.URL.createObjectURL(blob);
      const urlsplitted = url.split("/");
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", urlsplitted[urlsplitted.length - 1]);
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
    .catch((error) => {
      console.error("Error fetching image:", error);
    });
}

function getSteps() {
  return localStorage.getItem(stepkey)
    ? JSON.parse(localStorage.getItem(stepkey))
    : [];
}
const Content = () => {
  const {
    image,
    resetElementPicker,
    startSelection,
    saveStep,
    clearSteps,
    handleContentChange,
    toggleJourney,
    isJourneyRunning,
    element,
  } = useBuilder();
  return (
    <React.Fragment>
      {getSteps().length ? (
        <Button variant="contained" fullWidth onClick={toggleJourney}>
          Run your guide <i className="fa-solid fa-arrow-right" />
        </Button>
      ) : null}
      <Button onClick={startSelection}>
        <i className="fa-solid fa-crosshairs" />
      </Button>
      <Button color="error" onClick={resetElementPicker}>
        <i className="fa-solid fa-arrow-rotate-right" />
        Reset picker
      </Button>
      <Button color="error" onClick={clearSteps}>
        <i className="fa-solid fa-trash-can" /> Clear steps
      </Button>

      {image && (
        <React.Fragment>
          <Typography sx={{ fontSize: 12 }}></Typography>
          <img width={"100%"} src={image} />
          <TextField
            label="Content"
            fullWidth
            size="small"
            onChange={(e) => handleContentChange(e.currentTarget.value)}
          />
          <Button fullWidth sx={{ my: 2 }} onClick={saveStep}>
            <i className="fa-solid fa-circle-check" /> Save this step
          </Button>
        </React.Fragment>
      )}
      {element?.src ? (
        <Button
          fullWidth
          sx={{ my: 2 }}
          onClick={() => downloadImage(element.src)}
        >
          Download selected image
        </Button>
      ) : (
        <p>Please pick an image element to download.</p>
      )}
      <Joyride steps={getSteps()} run={isJourneyRunning} />
    </React.Fragment>
  );
};
export default Content;
