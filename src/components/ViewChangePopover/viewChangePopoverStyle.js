const viewChangePopoverStyle = (theme) => ({
  popoverMenuWrapper: {
    width: theme.popoverMenuWidth,
    backgroundColor: theme.palette.grey[200],
  },
  dividerRoot: {
    height: 2,
    backgroundColor: theme.palette.grey[400],
  },
  btnGroupWrapper: {
    textAlign: 'center',
    padding: theme.spacing(1),
  },
});

export default viewChangePopoverStyle;
