import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// @material-ui/core components
import { makeStyles, Link, Typography, Drawer, Hidden, List, ListItem, ListItemText } from '@material-ui/core';

import styles from './sidebarStyle.js';

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  const { homepage, color, logoImage, bgImage, logoText, routes } = props;

  function isActive(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }

  const drawerLists = (
    <React.Fragment>
      <Link href={homepage} target="_blank" underline="none" className={classes.logoLink}>
        <img src={logoImage} alt="logo" className={classes.logoImg} />
        <Typography variant="h2">{logoText}</Typography>
      </Link>

      <List className={classes.list}>
        {routes.map((prop, key) => (
          <NavLink to={prop.path} className={classes.item} activeClassName="active" key={key}>
            <ListItem button className={classNames(classes.itemLink, { [classes[color]]: isActive(prop.path) })}>
              <prop.icon className={classes.itemIcon} />
              <ListItemText primary={prop.name} className={classes.itemText} disableTypography={true} />
            </ListItem>
          </NavLink>
        ))}
      </List>

      <div className={classes.background} style={{ backgroundImage: 'url(' + bgImage + ')' }} />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Hidden smDown implementation="css">
        <Drawer anchor="left" variant="permanent" open>
          {drawerLists}
        </Drawer>
      </Hidden>
      <Hidden mdUp implementation="css">
        <Drawer
          anchor="right"
          variant="temporary"
          open={props.open}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawerLists}
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
}

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(['purple', 'blue', 'green', 'orange', 'red']),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
