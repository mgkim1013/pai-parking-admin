import React from 'react';
import { makeStyles, Fab, Typography, Divider, Popover, ButtonGroup, Button, IconButton } from '@material-ui/core';
import { Tv } from '@material-ui/icons';
import { GridIcon } from 'components';
import styles from './viewChangePopoverStyle.js';

const useStyles = makeStyles(styles);

export default function ViewChangePopover(props) {
  const classes = useStyles();
  const { view, fullscreen, handleViewSelect, handleScreenSelect } = props;

  const [popoverAnchor, setPopoverAnchor] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setPopoverAnchor(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setPopoverAnchor(null);
  };

  return (
    <React.Fragment>
      <Fab variant="extended" size="small" color="primary" onMouseEnter={handlePopoverOpen}>
        <Tv />
        <Typography>&nbsp;화면구성</Typography>
      </Fab>
      <Popover
        open={Boolean(popoverAnchor)}
        anchorEl={popoverAnchor}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <div className={classes.popoverMenuWrapper} onMouseLeave={handlePopoverClose}>
          {[...Array(9).keys()].map((gridId) => (
            <IconButton onClick={() => handleViewSelect(gridId)} key={gridId}>
              <GridIcon
                color={view === gridId ? 'primary' : 'inherit'}
                gridId={gridId}
                style={{ width: 1920 / 20, height: 1080 / 20 }}
              />
            </IconButton>
          ))}
          <Divider variant="middle" classes={{ root: classes.dividerRoot }} />
          <div className={classes.btnGroupWrapper}>
            <ButtonGroup color="primary">
              <Button onClick={() => handleScreenSelect(false)} color="primary" variant={fullscreen ? 'outlined' : 'contained'}>
                일반화면
              </Button>
              <Button onClick={() => handleScreenSelect(true)} color="primary" variant={fullscreen ? 'contained' : 'outlined'}>
                전체화면
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Popover>
    </React.Fragment>
  );
}
