<<<<<<< HEAD
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { white, purple, teal, blue } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  // root: {
  //   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  //   border: 0,
  //   borderRadius: 3,
  //   boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  //   color: "white",
  //   height: 48,
  //   padding: "0 30px",
  // },
});

export const theme = (isDarkMode) => {
  return createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
      primary: { main: isDarkMode ? purple[500] : purple[200] },
      secondary: { main: isDarkMode ? teal[500] : teal[200] },
    },
  });
};
=======
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { white, purple, teal, blue } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  // root: {
  //   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  //   border: 0,
  //   borderRadius: 3,
  //   boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  //   color: "white",
  //   height: 48,
  //   padding: "0 30px",
  // },
});

export const theme = (isDarkMode) => {
  return createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
      primary: { main: isDarkMode ? purple[500] : purple[200] },
      secondary: { main: isDarkMode ? teal[500] : teal[200] },
    },
  });
};
>>>>>>> 3f26fce42e081e226af527df603473416855ce40
