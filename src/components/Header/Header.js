import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, AppBar, Toolbar, Typography, IconButton, Hidden } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import styles from './headerStyle.js';

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();

  const getTitle = () => {
    let name;
    props.routes.map(prop => {
      if (window.location.href.indexOf(prop.path) !== -1) {
        name = prop.name;
      }
      return null;
    });
    return name;
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Typography variant="h1">{getTitle()}</Typography>
        <Hidden mdUp implementation="css">
          <IconButton color="inherit" aria-label="open drawer" onClick={props.handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};
