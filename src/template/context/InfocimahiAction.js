import { useContext } from "react";
import {
  InfocimahiReducer,
  SET_HIGHLIGHT,
  SET_SOURCE_TEXT,
  SET_SELECT,
  SET_TEXT,
  SET_FILE,
  SET_CURR_WIDTH,
} from "./InfocimahiContext";
const useInfocimahiAction = () => {
  const dispatch = useContext(InfocimahiReducer);
  if (dispatch === {}) {
    throw new Error(
      "useInfocimahiReducer must be used within BreakpointProvider"
    );
  }

  const setHighlight = (value) => {
    dispatch({ type: SET_HIGHLIGHT, payload: value });
  };
  const setText = (value) => {
    dispatch({ type: SET_TEXT, payload: value });
  };
  const setSelect = (value) => {
    dispatch({ type: SET_SELECT, payload: value });
  };
  const setSourceText = (value) => {
    dispatch({ type: SET_SOURCE_TEXT, payload: value });
  };
  const setFile = (value) => {
    dispatch({ type: SET_FILE, payload: value });
  };
  const setCurrWidth = (value) => {
    dispatch({ type: SET_CURR_WIDTH, payload: value });
  };

  return {
    setHighlight,
    setText,
    setSelect,
    setSourceText,
    setFile,
    setCurrWidth,
  };
};

export default useInfocimahiAction;
