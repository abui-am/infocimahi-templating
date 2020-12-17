import { createContext, useContext, useEffect, useState } from "react";

export const defWindowSize = {
  height: 678,
  width: 1366,
};

export const WindowContext = createContext(defWindowSize);
const WindowSizeProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState(defWindowSize);

  const eventListener = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", eventListener);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    return () => window.removeEventListener("resize", eventListener);
  }, []);

  return (
    <WindowContext.Provider value={windowSize}>
      {children}
    </WindowContext.Provider>
  );
};

const useWindowSize = () => {
  const context = useContext(WindowContext);
  if (context === {}) {
    throw new Error("useWindowSize must be used within BreakpointProvider");
  }
  return context;
};
export { WindowSizeProvider, useWindowSize };
