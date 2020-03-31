const headerStyle = theme => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: theme.palette.grey[700],
    position: 'absolute',
    padding: theme.contentPadding,
  },
  toolBar: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    padding: 0,
  },
});

export default headerStyle;
