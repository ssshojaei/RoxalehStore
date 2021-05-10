import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#151515",
      b: "#575757",
      c: "#A9A9A9",
      d: "#D1D1D1",
      e: "#EBEBEB",
      f: "#F5F5F5",
      h: "#F9F9F9",
    },
    secondary: {
      main: "#6A983C",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
