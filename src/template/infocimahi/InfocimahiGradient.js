import { makeStyles } from "@material-ui/core";
import scaleWithOriginal from "~/utils/calculation";
import { useInfocimahiStore } from "../context/InfocimahiContext";

const useStyles = makeStyles({
  gradient: {
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "52.32%",
    bottom: "0%",
    background:
      "linear-gradient(180deg, rgba(39, 35, 97, 0) 0%, rgba(29, 48, 101, 0.27) 26%, rgba(5, 83, 109, 0.95) 82%, #03556E 86%)",
  },
});

const InfocimahiGradient = () => {
  const classes = useStyles();
  const { currWidth: width } = useInfocimahiStore();
  return (
    <>
      <img
        src="iweburl.svg"
        style={{
          position: "absolute",
          width: scaleWithOriginal(349, 1500, width),
          height: scaleWithOriginal(28, 1500, width),
          left: scaleWithOriginal(36, 1500, width),
          top: scaleWithOriginal(1430, 1500, width),
          zIndex: 100,
        }}
      />
      <img
        src="iindentity.svg"
        style={{
          position: "absolute",
          width: scaleWithOriginal(878, 1500, width),
          height: scaleWithOriginal(29, 1500, width),
          left: scaleWithOriginal(596, 1500, width),
          top: scaleWithOriginal(1430, 1500, width),
          zIndex: 100,
        }}
      ></img>
      <div className={classes.gradient}></div>
    </>
  );
};

export default InfocimahiGradient;
