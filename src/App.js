import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

// Loading page
import { WaveLoading } from "react-loadingg";

// Custom style
import "./App.css";
// Material style
import {
  Container,
  Box,
  Typography,
  Grid,
  GridList,
  Paper,
  Button,
  Switch,
  FormGroup,
  FormControlLabel,
  AppBar,
  IconButton,
} from "@material-ui/core";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import SignOut from "./pages/SignOut";

// Components
import Navbar from "./components/Navbar";
import ReactModalLogin from "react-modal-login";

// Context
import { useStateValue } from "./context/StateProvider";

// Styles
import { useStyles, theme } from "./assets/styles/style";
import { ACTION_TYPE } from "./reducers/reducer";
import { purple } from "@material-ui/core/colors";

function App() {
  const [state, dispatch] = useStateValue();
  const classes = useStyles();

  useEffect(() => {
    document.title = "Codify";
    setTimeout(() => {
      dispatch({ type: ACTION_TYPE.FINISH_LOADING });
    }, 1500);
  }, []);

  return (
    <ThemeProvider theme={theme(state.isDarkMode)}>
      <Paper style={{ height: "100vh" }}>
        <div className="app">
          {state.isLoading ? (
            <WaveLoading
              color={state.isDarkMode ? purple[500] : purple[200]}
              size="large"
            />
          ) : (
            <Router>
              <Grid width direction="row" justify="center" alignItems="center">
                <Navbar />
                {/* Body */}
                {/* <Grid>
                  
                    <Button variant="contained" color="default">
                      Success
                    </Button>
                    <Button variant="contained" color="inherit">
                      Warning
                    </Button>
                    <button className={classes.root}>
                      My own Style Button
                    </button>
                    <Grid item>
                     
                    </Grid>
                  </Grid> */}
                {/* <Typography>This is Tittle of the page</Typography> */}
                {/* <Button className={classes.root}>Click me</Button> */}
                {state.isSignIn ? (
                  <Route path="/" exact component={Home} />
                ) : (
                  <Route path="/" component={SignOut} />
                )}
              </Grid>
            </Router>
          )}
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
