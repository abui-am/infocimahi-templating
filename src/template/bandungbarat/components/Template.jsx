import { makeStyles } from "@material-ui/core";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import {
  useResponsiveAction,
  useResponsiveDispatch,
  SET_WIDTH,
} from "~/context/ResponsiveContext";
import { useBandungBarat } from "../context/Context";
const useStyles = makeStyles({
  base: {
    maxHeight: 512,
    maxWidth: 512,
    width: "100%",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "100%",
    position: "relative",
    width: "100%",
  },
  gradient: {
    background:
      "linear-gradient(135deg, #7F217A 0%, #5E2E85 37.59%, #2B3990 75.45%, #2B3990 100%)",

    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
  },
  hashtag: {
    position: "absolute",
    left: "2.11%",
    right: "80.75%",
    top: "0.98%",
    bottom: "96.28%",
    fontFamily: "Geometria",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 32.7036,
    lineHeight: "41px",
    color: "#FFFFFF",
  },
  identity: {
    position: "absolute",
    bottom: "2.82%",
    left: "13.83%",
  },
  text: {
    display: "inline-block",
    fontFamily: "Geometria",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#FFFFFF",
    left: "6.88%",
    top: "69.17%",
    position: "absolute",
    textAlign: "left",
    whiteSpace: "pre-wrap",
  },
  bbimage: {
    position: "absolute",
    right: "2.96%",
    top: "2.27%",
  },
  image: {
    position: "absolute",
    left: "6.87%",
    right: "8%",
    top: "15.93%",
    bottom: "34.2%",
  },
  sourceText: {
    transform: "rotate(-90deg)",
    position: "absolute",
    color: "#ffffff",
    fontWeight: "bold",
    marginBlockEnd: "0em",
    marginBlockStart: "0em",
    transformOrigin: "bottom right",
    right: "2%",
    display: "inline-block",
  },
});

const Template = () => {
  const classes = useStyles();
  const { register, scale } = useResponsiveAction();
  const dispatch = useResponsiveDispatch();
  const [{ title, source, highlight, file }] = useBandungBarat();
  const [sourceTextWidth, setSourceTextWidth] = useState();
  const sourceTextRef = useRef();
  useEffect(() => {
    if (sourceTextRef.current)
      setSourceTextWidth(sourceTextRef.current.clientWidth);
  });
  useEffect(() => {
    dispatch({
      type: SET_WIDTH,
      payload: register?.current?.clientWidth,
    });
  }, [register.current]);
  return (
    <div className={classes.base}>
      <div className={classes.root}>
        <div className={classes.gradient} ref={register}>
          <img
            src="/bandungbarat/bandungbarat.png"
            style={{ height: scale(168) }}
            className={classes.bbimage}
          />

          <HashTag
            style={{
              fontSize: scale(32.7036),
              lineHeight: `${scale(41)}px`,
            }}
          />
          <Identity style={{ height: scale(41) }} />
          {useMemo(
            () => (
              <span
                className={classes.sourceText}
                style={{
                  whiteSpace: "nowrap",
                  fontSize: scale(25),
                  zIndex: 10,
                  bottom: scale(568) + sourceTextWidth,
                  fontFamily: "Geometria",
                }}
                ref={sourceTextRef}
              >
                sumber : {source}
              </span>
            ),
            [source, sourceTextWidth]
          )}
          <div
            className={classes.text}
            style={{
              width: scale(1269),
            }}
          >
            {useMemo(
              () => (
                <Highlighter
                  // highlightClassName="highlight-text"
                  searchWords={[highlight]}
                  // autoEscape={true}
                  highlightStyle={{
                    fontSize: scale(86.492),
                    lineHeight: `${scale(110)}px`,
                    padding: `0px ${scale(16)}px`,
                    display: "inline-block",
                    backgroundColor: "#ffde17",
                    marginTop: `-${scale(5)}`,
                    color: "#231f20",
                    marginBlockStart: 0,
                  }}
                  textToHighlight={`${title}`}
                  unhighlightStyle={{
                    fontSize: scale(86.492),
                    lineHeight: `${scale(109)}px`,
                    display: "inline-block",
                  }}
                />
              ),
              [highlight, title]
            )}
          </div>
          <div className={classes.image}>
            {useMemo(
              () => (
                <img
                  src={file || "ex.jpg"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ),
              [file]
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const HashTag = ({ style }) => {
  const classes = useStyles();
  return (
    <div className={classes.hashtag} style={style}>
      #bandungbarat
    </div>
  );
};

const Identity = ({ style }) => {
  const classes = useStyles();
  return (
    <img
      src="/bandungbarat/identity.png"
      className={classes.identity}
      style={style}
    />
  );
};

export default Template;
