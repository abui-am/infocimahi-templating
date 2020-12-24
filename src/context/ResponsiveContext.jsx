import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import scaleWithOriginal from "~/utils/calculation";
export const SET_WIDTH = "SET_WIDTH";

const ResposiveState = createContext();
const ResponsiveDispatch = createContext();
const ResponsiveAction = createContext();

const initState = {
  width: 0,
};

const responsiveReducer = (state, action) => {
  switch (action.type) {
    case SET_WIDTH: {
      return { ...state, width: action.payload };
    }
  }
};

const ResponsiveProvider = ({ children }) => {
  const [state, dispatch] = useReducer(responsiveReducer, initState);
  const [width, setWidth] = useState();
  const register = useRef();

  useEffect(() => {
    return setWidth(register?.current?.clientWidth);
  }, [register]);

  const scale = (value, width) => {
    return scaleWithOriginal(value, 1500, width);
  };

  const actionValue = {
    scale,
    register,
    width,
  };

  return (
    <ResposiveState.Provider value={state}>
      <ResponsiveDispatch.Provider value={dispatch}>
        <ResponsiveAction.Provider value={actionValue}>
          {children}
        </ResponsiveAction.Provider>
      </ResponsiveDispatch.Provider>
    </ResposiveState.Provider>
  );
};

const useResponsiveState = () => {
  const context = useContext(ResposiveState);
  if (!context)
    throw Error("useResponsiveState must be used within ResponsiveProvider");
  return context;
};

const useResponsiveDispatch = () => {
  const context = useContext(ResponsiveDispatch);
  if (!context)
    throw Error("useResponsiveDispatch must be used within ResponsiveProvider");
  return context;
};
const useResponsiveAction = () => {
  const context = useContext(ResponsiveAction);
  if (!context)
    throw Error("useResponsiveAction must be used within ResponsiveProvider");
  return context;
};

const useResponsive = () => {
  return [useResponsiveState(), useResponsiveDispatch()];
};

export {
  useResponsive,
  useResponsiveState,
  useResponsiveDispatch,
  ResponsiveProvider,
  useResponsiveAction,
};
