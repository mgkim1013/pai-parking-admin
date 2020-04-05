const nsLayoutStyle = (theme) => ({
  wrapper: {
    position: 'relative',
    top: '0',
    height: '100vh',
  },
  mainPanel: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${theme.drawerWidth}px)`,
    },
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    transition: theme.contentTransition,
    maxHeight: '100%',
    width: '100%',
    overflowScrolling: 'touch',
    backgroundColor: theme.palette.grey[200],
    color: theme.contentColor,
  },
  content: {
    marginTop: theme.headerHeight,
    margin: theme.contentPadding,
    minHeight: theme.contentMinHeight,
  },
});

export default nsLayoutStyle;
