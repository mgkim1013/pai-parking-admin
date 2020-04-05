const headerStyle = (theme) => ({
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
  titleWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  viewChangePopover: {
    marginLeft: theme.spacing(2),
  },
});

export default headerStyle;
