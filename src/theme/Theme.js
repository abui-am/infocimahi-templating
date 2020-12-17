import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import orange from "@material-ui/core/colors/orange";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2a95a0",
    },
    secondary: {
      main: orange.A400,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
  },
});

export default theme;
