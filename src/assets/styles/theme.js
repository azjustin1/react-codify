import { createMuiTheme } from "@material-ui/core/styles";
import { blue, green, purple, red, teal } from "@material-ui/core/colors";

const theme = (darkMode) => {
  return createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: { main: darkMode ? blue[500] : blue[200] },
      secondary: { main: darkMode ? red[500] : teal[200] },
    },
  });
};

export default theme;
