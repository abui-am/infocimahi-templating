const scaleWithOriginal = (value, originalWidth, realWidth) => {
  return (value / originalWidth) * realWidth;
};

export default scaleWithOriginal;
