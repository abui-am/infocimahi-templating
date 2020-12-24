import { useState } from "react";
import DomToImage from "dom-to-image";
import { saveAs } from "file-saver";

const useSave = (prefix) => {
  const [file, setFile] = useState();
  const onInputFile = (e) => {
    setFile({
      ...e.target.files[0],
    });
  };

  const save = (imageDiv) => {
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
        saveAs(blob, `${prefix}-${Date.now()}`);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return {
    file,
    onInputFile,
    save,
  };
};

export default useSave;
