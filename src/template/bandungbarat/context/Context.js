import { createContext, useContext, useReducer } from "react";

export const BandungBaratState = createContext();
export const BandungBaratDispatch = createContext();

export const SET_STATE = "setState";

const initReducer = (state, action) => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, [action.payload.name]: action.payload.value };

    default:
      throw new Error("Unexpected action");
  }
};

const BandungBaratProvider = ({ children }) => {
  const initValue = {
    title: "",
    source: "",
    highlight: "",
  };

  const [state, dispatch] = useReducer(initReducer, initValue);

  return (
    <BandungBaratState.Provider value={state}>
      <BandungBaratDispatch.Provider value={dispatch}>
        {children}
      </BandungBaratDispatch.Provider>
    </BandungBaratState.Provider>
  );
};

const useBandungBaratState = () => {
  const context = useContext(BandungBaratState);
  if (context === {}) {
    throw new Error(
      "useInfocimahiStore must be used within BreakpointProvider"
    );
  }
  return context;
};

const useBandungBaratDispatch = () => {
  const context = useContext(BandungBaratDispatch);
  if (context === {}) {
    throw new Error(
      "useInfocimahiReducer must be used within BreakpointProvider"
    );
  }
  return context;
};

const useBandungBarat = () => [
  useBandungBaratState(),
  useBandungBaratDispatch(),
];
export {
  BandungBaratProvider,
  useBandungBaratDispatch,
  useBandungBaratState,
  useBandungBarat,
};
