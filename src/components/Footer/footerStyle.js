export const footerStyle = theme => ({
  footer: {
    minHeight: theme.footerHeight,
    borderTop: theme.footerBorderTop,
    padding: theme.contentPadding,
    fontSize: theme.footerFontSize,
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  links: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    padding: theme.spacing(1),
  },
  copyright: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    },
  },
});

export default footerStyle;
