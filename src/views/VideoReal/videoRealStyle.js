const videoRealStyle = (theme) => ({
  imgWrapper: {
    position: 'relative',
    display: 'inline-block',
    float: 'left',
    padding: theme.spacing(0.5),
  },
  img: {
    width: '100%',
    height: '100%',
  },
  imgTitle: {
    position: 'absolute',
    padding: theme.spacing(0.5),
    top: theme.spacing(1.5),
    left: theme.spacing(1.5),
    backgroundColor: 'rgba(' + theme.hexToRgb(theme.palette.common.white) + ',.3)',
  },
});

export default videoRealStyle;
