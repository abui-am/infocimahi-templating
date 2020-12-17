import { makeStyles } from "@material-ui/core/styles";
import scaleWithOriginal from "~/utils/calculation";
import PropTypes from "prop-types";
import { useInfocimahiStore } from "../context/InfocimahiContext";
const useStyles = makeStyles({
  base: {
    backgroundColor: "#2a95a0",
    fontWeight: 600,
    color: "white",
  },
  blade: {
    width: 0,
    height: 0,
    position: "absolute",
    zIndex: "-1",
  },
});

const Tag = ({ text }) => {
  const { currWidth: width } = useInfocimahiStore();
  const classes = useStyles();
  return (
    <div
      style={{
        marginLeft: scaleWithOriginal(24, 1500, width),
        textAlign: "left",
        position: "relative",
      }}
    >
      <div
        className={classes.base}
        style={{
          fontFamily: "'Monserrat',sans-serif",
          fontSize: scaleWithOriginal(31, 1500, width),
          borderRadius: scaleWithOriginal(9, 1500, width),
          paddingBottom: scaleWithOriginal(8, 1500, width),
          paddingTop: scaleWithOriginal(8, 1500, width),
          paddingLeft: scaleWithOriginal(16, 1500, width),
          paddingRight: scaleWithOriginal(24, 1500, width),
        }}
      >
        {"#" + text.toUpperCase()}
      </div>
      <div
        className={classes.blade}
        style={{
          borderLeft: `${scaleWithOriginal(30, 1500, width)}px solid #2a95a0`,
          borderBottom: `${scaleWithOriginal(
            30,
            1500,
            width
          )}px solid transparent`,
          left: scaleWithOriginal(50, 1500, width),
        }}
      ></div>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string,
};

export default Tag;
