import React from "react";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

function UploadButton(props) {
  const { onUpload, text } = props

  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="button-photo"
        type="file"
        onChange={e => onUpload(e)}
      />
      <label htmlFor="button-photo">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          {text}
        </Button>
      </label>
    </>
  )
}

  export default UploadButton;