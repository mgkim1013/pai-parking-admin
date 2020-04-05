import React from 'react';
import { makeStyles, Fab, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import styles from './videoRealStyle.js';
import { getCameraNames, getVideo } from 'api/api.js';

const viewConfig = [
  { cols: 1, sizes: [1] },
  { cols: 2, sizes: [1, 1, 1, 1] },
  { cols: 3, sizes: [1, 1, 1, 1, 1, 1, 1, 1, 1] },
  { cols: 3, sizes: [2, 1, 1, 1, 1, 1] },
  { cols: 4, sizes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
  { cols: 4, sizes: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
  { cols: 4, sizes: [2, 2, 1, 1, 1, 1, 1, 1, 1, 1] },
  { cols: 4, sizes: [2, 2, 2, 1, 1, 1, 1] },
  { cols: 4, sizes: [3, 1, 1, 1, 1, 1, 1, 1] },
];

const useStyles = makeStyles(styles);

const useContainerDimensions = (myRef) => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const getDimensions = () => ({
      width: myRef.current.offsetWidth,
    });

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef]);

  return dimensions;
};

const VideoReal = (props) => {
  const classes = useStyles();
  const camNames = getCameraNames();
  const { view, fullscreen, parent } = props;

  const [fullWidth, setFullWidth] = React.useState(0);
  const [videoList, setVideoList] = React.useState(camNames.concat(camNames));

  React.useEffect(() => {
    const handleResize = () => setFullWidth(parent.current.offsetWidth);
    if (parent.current) setFullWidth(parent.current.offsetWidth);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [parent]);

  const handleCamChange = (key) => (event, value, reason) => {
    if (reason === 'select-option') {
      videoList[key] = value;
      setVideoList([...videoList]);
    }
  };

  return (
    <React.Fragment>
      {viewConfig[view].sizes.map((size, key) => (
        <div
          key={key}
          className={classes.imgWrapper}
          style={{
            width: (fullWidth / viewConfig[view].cols) * size,
            height: ((((Math.ceil(fullWidth) * 3) / 3 / 1920) * 1080) / viewConfig[view].cols) * size,
          }}
        >
          <img className={classes.img} src={getVideo(videoList[key])} alt={videoList[key]} />
          <Fab component="div" variant="extended" disableRipple={true} size="small" className={classes.imgTitle}>
            <Autocomplete
              options={camNames}
              value={videoList[key]}
              style={{ width: 200 }}
              onChange={handleCamChange(key)}
              renderTags={() => null}
              noOptionsText={'일치하는 결과가 없습니다'}
              renderInput={(params) => <TextField {...params} />}
            />
          </Fab>
        </div>
      ))}
    </React.Fragment>
  );
};

export default VideoReal;
