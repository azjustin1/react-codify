import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  makeStyles,
  Typography,
  IconButton,
  Button,
  Menu,
  Toolbar,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { Mail as MailIcon } from "@material-ui/icons";
import { useStateValue } from "../context/StateProvider";
import { ACTION_TYPE } from "../reducers/reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const [state, dispatch] = useStateValue();
  const classes = useStyles();
  const [isDarkMode, setDarkMode] = useState(state.isDarkMode);

  const changeDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    dispatch({ type: ACTION_TYPE.SWITCH_DARK_MODE, isDarkMode: isDarkMode });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  checked={isDarkMode}
                  onChange={changeDarkMode}
                />
              }
              label="Dark Mode"
            />
          </FormGroup>
          <Button variant="contained" color="primary">
            Sign In
          </Button>
          <Button variant="contained" color="default">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
