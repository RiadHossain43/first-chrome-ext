import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import useBuilder from "./store/useBuilder";
const Content = () => {
  const {
    image,
    resetElementPicker,
    startSelection,
    saveStep,
    clearSteps,
    handleContentChange,
  } = useBuilder();
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
export default Content;
