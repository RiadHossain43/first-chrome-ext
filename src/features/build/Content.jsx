import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import useBuilder from "./store/useBuilder";
import Joyride from "react-joyride";
const stepkey = "react-step-builder-key";
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
      <Joyride steps={getSteps()} run={isJourneyRunning} />
    </React.Fragment>
  );
};
export default Content;
