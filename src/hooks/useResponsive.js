import { useState, useEffect, useRef } from "react";
import scaleWithOriginal from "~/utils/calculation";

const useResponsive = () => {
  const register = useRef(null);
  const { width, setWidth } = useState(0);
  useEffect(() => {
    if (register.current) {
      setWidth(register?.current?.clientWidth);
    }
  }, [register]);

  const responsive = (value) => {
    console.log(width);
    return scaleWithOriginal(value, 1500, width);
  };

  return { register, width, responsive };
};

export default useResponsive;
