import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    marginTop: theme.spacing(5),
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    maxWidth: 1064,
  },
}));
const BasicContainer = ({ children, style, className }) => {
  const classes = useStyles();
  return (
    <section className={clsx(classes.base, className)} style={style}>
      <div className={classes.wrapper}>{children}</div>
    </section>
  );
};

export default BasicContainer;
