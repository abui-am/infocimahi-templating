import { makeStyles } from "@material-ui/core";
import { func, string } from "prop-types";
import React from "react";

const useStyles = makeStyles({
  textArea: {
    border: "0.5px solid #a2a2a2",
    borderRadius: 4,
    padding: 4,
    width: "100%",
    resize: "none",
  },
});
const TextArea = ({ onChange, placeholder, ...props }) => {
  const classes = useStyles();
  return (
    <textarea
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      rows={4}
      className={classes.textArea}
      {...props}
    />
  );
};

TextArea.propTypes = {
  onChange: func,
  placeholder: string,
};

export default TextArea;
