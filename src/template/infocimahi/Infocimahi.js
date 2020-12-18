import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import scaleWithOriginal from "~/utils/calculation";
import useInfocimahiAction from "../context/InfocimahiAction";
import { useInfocimahiStore } from "../context/InfocimahiContext";
import Form from "./Form";
import InfocimahiGradient from "./InfocimahiGradient";
import Tag from "./Tag";

const useStyles = makeStyles({
  imageDiv: {
    maxHeight: 512,
    maxWidth: 512,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  imageDivContent: {
    position: "relative",
    paddingTop: "100%",
    width: "100%",
  },
  image: {
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  templateText: {
    position: "absolute",
    marginBlockStart: "0em",
    marginBlockEnd: "0em",
    marginInlineStart: 0,
    marginInlineEnd: 0,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: "#ffffff",
    whiteSpace: "pre-wrap",
    zIndex: 2,
    textAlign: "left",
  },
  sourchText: {
    transform: "rotate(-90deg)",
    position: "absolute",
    color: "#ffffff",
    fontWeight: "bold",
    marginBlockEnd: "0em",
    marginBlockStart: "0em",
    transformOrigin: "bottom right",
    right: "1.4%",
    display: "inline-block",
  },
});

const InfocimahiTemplate = () => {
  const [bottomAddition, setBottomAddition] = useState(0);
  const imageDiv = useRef(null);
  const sourceTextRef = useRef(null);
  const classes = useStyles();
  const {
    text,
    highlight,
    sourceText,
    select,
    currWidth: width,
    file,
  } = useInfocimahiStore();
  const { setCurrWidth } = useInfocimahiAction();

  useEffect(() => {
    if (sourceTextRef.current)
      setBottomAddition(sourceTextRef.current.clientWidth);
  });

  useEffect(() => {
    if (imageDiv.current) {
      console.log("workss", imageDiv.current.clientWidth);
      setCurrWidth(imageDiv.current.clientWidth);
    }
  }, [imageDiv]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 512,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={classes.imageDiv} ref={imageDiv}>
        <div className={classes.imageDivContent}>
          <img
            className={classes.image}
            alt="imageEx"
            src={file?.imagePath || "ex.jpg"}
          />
          {useMemo(
            () => (
              <InfocimahiGradient />
            ),
            [width]
          )}
          <span
            className={classes.sourchText}
            style={{
              whiteSpace: "nowrap",
              fontSize: scaleWithOriginal(25, 1500, width),
              zIndex: 10,
              bottom: scaleWithOriginal(568, 1500, width) + bottomAddition,
              fontFamily: "'Monserrat',sans-serif",
            }}
            ref={sourceTextRef}
          >
            sumber : {sourceText}
          </span>
          <img
            src="logo-main.png"
            style={{
              position: "absolute",
              width: scaleWithOriginal(319, 1500, width),
              height: scaleWithOriginal(80, 1500, width),
              left: scaleWithOriginal(45, 1500, width),
              top: scaleWithOriginal(36, 1500, width),
            }}
          ></img>
          <div
            className={classes.templateText}
            style={{
              fontSize: scaleWithOriginal(72.86, 1500, width),
              left: scaleWithOriginal(77, 1500, width),
              width: scaleWithOriginal(1322, 1500, width),
              height: scaleWithOriginal(294, 1500, width),
              top: scaleWithOriginal(995, 1500, width),
              lineHeight: scaleWithOriginal(102, 1500, width) + "px",
            }}
          >
            <Highlighter
              // highlightClassName="highlight-text"
              searchWords={[highlight]}
              // autoEscape={true}
              highlightStyle={{
                display: "inline-block",
                paddingRight: `${scaleWithOriginal(18, 1500, width)}px`,
                paddingLeft: `${scaleWithOriginal(18, 1500, width)}px`,
                backgroundColor: "#ffde17",
                color: "#231f20",
                borderRadius: scaleWithOriginal(32, 1500, width),
                marginBlockStart: 0,
              }}
              textToHighlight={text}
            />
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: 20,
              right: scaleWithOriginal(33, 1500, width),
              top: scaleWithOriginal(33, 1500, width),
              width: "100%",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            {select &&
              select.map((item) => (
                <Tag text={item.value} key={Math.random(10)} />
              ))}
          </div>
        </div>
      </div>
      <Form imageDiv={imageDiv} />
    </div>
  );
};

export default InfocimahiTemplate;
