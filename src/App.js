import React, { useEffect, useState } from "react";
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
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import SignOut from "./pages/SignOut";

// Components
import Navbar from "./components/Navbar";
import ReactModalLogin from "react-modal-login";

// Context
import { useStateValue } from "./context/StateProvider";
import { ACTION_TYPE } from "./reducers/reducer";

// Themes
import theme, { lightTheme, darkTheme } from "./assets/styles/theme";
import { purple, teal } from "@material-ui/core/colors";

// Styles
import { useStyles } from "./assets/styles/style";

function App() {
  const [state, dispatch] = useStateValue();
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme(state.isDarkMode)}>
      <Paper style={{ height: "100vh" }}>
        <div className="app">
          {state.isLoading ? (
            <WaveLoading color="green" size="large" />
          ) : (
            <Router>
              <Grid width direction="row" justify="center" alignItems="center">
                <Navbar />
                {/* Body */}
                {/* <Grid>
                    <Button variant="contained" color="primary">
                      Primary
                    </Button>
                    <Button variant="contained" color="secondary">
                      Secondary
                    </Button>
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
