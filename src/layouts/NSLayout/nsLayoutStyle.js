const nsLayoutStyle = theme => ({
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
    marginTop: '64px',
    padding: theme.contentPadding,
    minHeight: `calc(100vh - ${theme.headerHeight}px - ${theme.footerHeight}px)`,
  },
});

export default nsLayoutStyle;
