import Select from "react-select/creatable";
import React from "react";
import useInfocimahiAction from "../context/InfocimahiAction";
import DomToImage from "dom-to-image";
import PropTypes from "prop-types";
import { saveAs } from "file-saver";
import { useInfocimahiStore } from "../context/InfocimahiContext";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textArea: {
    border: "0.5px solid #a2a2a2",
    borderRadius: 4,
    padding: 4,
    width: "100%",
    resize: "none",
  },
  textField: {
    border: "0.5px solid #a2a2a2",
    borderRadius: 4,
    minHeight: 38,
    padding: 4,
    width: "100%",
  },
  form: {
    paddingTop: 8,
    width: "100%",
    maxWidth: 512,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
}));

const Form = ({ imageDiv }) => {
  const classes = useStyles();
  const options = [
    { value: "BREAKINGNEWS", label: "BREAKINGNEWS" },
    { value: "CIMAHI", label: "CIMAHI" },
    { value: "INFOCOVID-19", label: "INFOCOVID" },
    { value: "TEKNOLOGI", label: "TEKNOLOGI" },
    { value: "INFOKESEHATAN", label: "INFOKESEHATAN" },
    { value: "MUSIK", label: "MUSIK" },
    { value: "INFOGRAFIS", label: "INFOGRAFIS" },
    { value: "CIMAHIYUMMY", label: "CIMAHIYUMMY" },
    { value: "OTOMOTIF", label: "OTOMOTIF" },
    { value: "FOTOGRAFI", label: "FOTOGRAFI" },
  ];

  const {
    setText,
    setHighlight,
    setSourceText,
    setSelect,
    setFile,
  } = useInfocimahiAction();

  const { highlight } = useInfocimahiStore();

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onHighlightChange = (e) => {
    setHighlight(e.target.value);
  };

  const onSourceChange = (e) => {
    setSourceText(e.target.value);
  };
  const onChangeSelect = (value, type) => {
    console.log("val", value, type);

    setSelect(value);
  };

  const onInputFile = (e) =>
    setFile({
      ...e.target.files[0],
      imagePath: URL.createObjectURL(e.target.files[0]),
    });

  const save = () => {
    const scale = 3;
    DomToImage.toPng(imageDiv.current, {
      height: imageDiv.current.offsetHeight * scale,
      width: imageDiv.current.offsetWidth * scale,
      style: {
        transform: "scale(" + scale + ")",
        transformOrigin: "top left",
        width: imageDiv.current.offsetHeight + "px",
        height: imageDiv.current.offsetWidth + "px",
      },
    })
      .then(function (blob) {
        saveAs(blob, `infocimahi-${highlight}`);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div className={classes.form}>
      <div style={{ paddingBottom: 8 }}>
        <input type="file" text="Image" onChange={onInputFile} />
      </div>
      <div style={{ paddingBottom: 8 }}>
        <textarea
          onChange={onTextChange}
          placeholder="Text"
          type="text"
          rows={4}
          className={classes.textArea}
        />
      </div>
      <div style={{ paddingBottom: 8 }}>
        <input
          onChange={onHighlightChange}
          placeholder="Highlight"
          type="text"
          className={classes.textField}
        />
      </div>
      <div style={{ paddingBottom: 8 }}>
        <input
          onChange={onSourceChange}
          placeholder="Sumber"
          type="text"
          className={classes.textField}
        />
      </div>
      <div style={{ paddingBottom: 8, paddingTop: 4 }}>
        <Select
          options={options}
          onChange={onChangeSelect}
          isMulti
          menuPlacement="top"
        />
      </div>

      <button
        onClick={save}
        style={{
          marginTop: 8,
          marginBottom: 16,
          padding: "8px 16px",
          width: "100%",
          backgroundColor: "#2a95a0",
          color: "#ffffff",
          border: 0,
          borderRadius: 4,
          fontWeight: "bold",
        }}
      >
        Save
      </button>
    </div>
  );
};

Form.propTypes = {
  imageDiv: PropTypes.any,
};
export default Form;
