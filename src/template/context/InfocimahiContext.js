import { createContext, useContext, useReducer } from "react";

export const InfocimahiStore = createContext();
export const InfocimahiReducer = createContext();

export const SET_HIGHLIGHT = "setHighlight";
export const SET_TEXT = "setText";
export const SET_SELECT = "setSelect";
export const SET_SOURCE_TEXT = "setSourceText";
export const SET_FILE = "setFile";
export const SET_CURR_WIDTH = "setCurrWidth";

const initReducer = (state, action) => {
  switch (action.type) {
    case "setHighlight":
      return { ...state, highlight: action.payload };
    case "setText":
      return { ...state, text: action.payload };
    case "setSelect":
      return { ...state, select: action.payload };
    case "setSourceText":
      return { ...state, sourceText: action.payload };
    case SET_FILE:
      return { ...state, file: action.payload };
    case SET_CURR_WIDTH:
      return { ...state, currWidth: action.payload };
    default:
      throw new Error("Unexpected action");
  }
};

const InfocimahiProvider = ({ children }) => {
  const initValue = {
    highlight: "",
    text: "",
    select: [],
    sourceText: "",
    file: {},
    currWidth: 0,
  };

  const [store, reducer] = useReducer(initReducer, initValue);

  return (
    <InfocimahiStore.Provider value={store}>
      <InfocimahiReducer.Provider value={reducer}>
        {children}
      </InfocimahiReducer.Provider>
    </InfocimahiStore.Provider>
  );
};

const useInfocimahiStore = () => {
  const context = useContext(InfocimahiStore);
  if (context === {}) {
    throw new Error(
      "useInfocimahiStore must be used within BreakpointProvider"
    );
  }
  return context;
};

const useInfocimahiReducer = () => {
  const context = useContext(InfocimahiReducer);
  if (context === {}) {
    throw new Error(
      "useInfocimahiReducer must be used within BreakpointProvider"
    );
  }
  return context;
};
export { InfocimahiProvider, useInfocimahiStore, useInfocimahiReducer };
