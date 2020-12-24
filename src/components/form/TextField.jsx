import { makeStyles } from "@material-ui/core";
import React from "react";
import {func, string} from "prop-types";

const useStyles = makeStyles({
    textField: {
        border: "0.5px solid #a2a2a2",
        borderRadius: 4,
        minHeight: 38,
        padding: 4,
        width: "100%",
      },
});

const TextField = ({onChange,placeholder,...props}) => {
    const classes = useStyles();
    return (
        <input
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        className={classes.textField}
        {...props}
      />
    );
};

TextField.propTypes = {
    onChange : func,
    placeholder : string,
};

export default TextField;
