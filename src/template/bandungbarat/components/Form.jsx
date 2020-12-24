import {
  Button,
  InputBase,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import useSave from "~/hooks/useSave";
import { SET_STATE, useBandungBarat } from "../context/Context";

const useStyles = makeStyles({
  root: {
    marginTop: 16,
    maxWidth: 512,
  },
  TextField: {
    marginBottom: 16,
  },
});

const Form = () => {
  const [{ ref, title, source, highlight }, dispatch] = useBandungBarat();
  const { save, onInputFile } = useSave("bbrt");
  const classes = useStyles();

  const onChange = (e) =>
    dispatch({
      type: SET_STATE,
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });

  const onChangeFile = (e) => {
    onInputFile(e);
    dispatch({
      type: SET_STATE,
      payload: {
        name: e.target.name,
        value: URL.createObjectURL(e.target.files[0]),
      },
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.TextField}>
        <Typography align="left">Gambar :</Typography>
        <InputBase type="file" name="file" onChange={onChangeFile} fullWidth />
      </div>

      <TextField
        label="Judul"
        name="title"
        fullWidth
        value={title}
        onChange={onChange}
        className={classes.TextField}
        variant="outlined"
        multiline
      />
      <TextField
        label="Highlight"
        name="highlight"
        value={highlight}
        fullWidth
        className={classes.TextField}
        onChange={onChange}
        variant="outlined"
      />
      <TextField
        label="Sumber"
        name="source"
        value={source}
        fullWidth
        onChange={onChange}
        className={classes.TextField}
        variant="outlined"
      />
      <Button
        fullWidth
        onClick={() => save(ref)}
        variant="contained"
        color="primary"
      >
        Save
      </Button>
    </div>
  );
};

export default Form;
