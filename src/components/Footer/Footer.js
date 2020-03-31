import React from 'react';
import { makeStyles, Link } from '@material-ui/core';
import styles from './footerStyle.js';

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { links, copyright } = props;

  return (
    <footer className={classes.footer}>
      <div className={classes.links} />
      <div className={classes.links}>
        {links.map((link, key) => (
          <Link key={key} href={link.url} target="_blank" color="inherit" className={classes.link}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className={classes.copyright}>
        &copy;{1900 + new Date().getYear()} &nbsp;
        <Link href={copyright.url} target="_blank" color="inherit">
          {copyright.corpName}
        </Link>
        . All rights reserved.
      </div>
    </footer>
  );
}
