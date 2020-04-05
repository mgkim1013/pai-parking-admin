const sidebarStyle = theme => ({
  logoLink: {
    position: 'relative',
    padding: theme.sidebarSpacing1,
    zIndex: '3',
    display: 'inline-flex',
    alignItems: 'center',
    '&,&:hover': {
      color: theme.palette.common.white,
    },
    '&:after': {
      ...theme.sidebarDivider,
    },
  },
  logoImg: {
    width: theme.sidebarLogoImgSize,
    margin: `0 ${theme.sidebarSpacing1}`,
  },
  list: {
    width: theme.drawerWidth,
    marginTop: 5,
    overflow: 'auto',
    zIndex: '3',
    padding: '0',
  },
  item: {
    textDecoration: 'none',
    '&:hover,&:focus,&:visited,&': {
      color: theme.palette.common.white,
    },
  },
  itemLink: {
    width: 'auto',
    transition: 'all 300ms linear',
    margin: `${theme.sidebarSpacing2} ${theme.sidebarSpacing1} 0`,
    padding: `${theme.sidebarSpacing2} ${theme.sidebarSpacing1}`,
    borderRadius: '3px',
    display: 'block',
  },
  itemIcon: {
    ...theme.sidebarItemIconSize,
    float: 'left',
    marginRight: theme.sidebarSpacing1,
    color: 'rgba(' + theme.hexToRgb(theme.palette.common.white) + ', 0.8)',
  },
  itemText: {
    ...theme.sidebarItemTextSize,
    margin: '0',
    color: theme.palette.common.white,
  },
  purple: {
    backgroundColor: theme.palette.purple.main,
    boxShadow:
      '0 12px 20px -10px rgba(' +
      theme.hexToRgb(theme.palette.purple.main) +
      ',.28), 0 4px 20px 0 rgba(' +
      theme.hexToRgb(theme.palette.common.black) +
      ',.12), 0 7px 8px -5px rgba(' +
      theme.hexToRgb(theme.palette.purple.main) +
      ',.2)',
    '&:hover,&:focus': {
      backgroundColor: theme.palette.purple.main,
      boxShadow:
        '0 12px 20px -10px rgba(' +
        theme.hexToRgb(theme.palette.purple.main) +
        ',.28), 0 4px 20px 0 rgba(' +
        theme.hexToRgb(theme.palette.common.black) +
        ',.12), 0 7px 8px -5px rgba(' +
        theme.hexToRgb(theme.palette.purple.main) +
        ',.2)',
    },
  },
  blue: {
    backgroundColor: theme.palette.blue.main,
    boxShadow:
      '0 12px 20px -10px rgba(' +
      theme.hexToRgb(theme.palette.blue.main) +
      ',.28), 0 4px 20px 0 rgba(' +
      theme.hexToRgb(theme.palette.common.black) +
      ',.12), 0 7px 8px -5px rgba(' +
      theme.hexToRgb(theme.palette.blue.main) +
      ',.2)',
    '&:hover,&:focus': {
      backgroundColor: theme.palette.blue.main,
      boxShadow:
        '0 12px 20px -10px rgba(' +
        theme.hexToRgb(theme.palette.blue.main) +
        ',.28), 0 4px 20px 0 rgba(' +
        theme.hexToRgb(theme.palette.common.black) +
        ',.12), 0 7px 8px -5px rgba(' +
        theme.hexToRgb(theme.palette.blue.main) +
        ',.2)',
    },
  },
  green: {
    backgroundColor: theme.palette.green.main,
    boxShadow:
      '0 12px 20px -10px rgba(' +
      theme.hexToRgb(theme.palette.green.main) +
      ',.28), 0 4px 20px 0 rgba(' +
      theme.hexToRgb(theme.palette.common.black) +
      ',.12), 0 7px 8px -5px rgba(' +
      theme.hexToRgb(theme.palette.green.main) +
      ',.2)',
    '&:hover,&:focus': {
      backgroundColor: theme.palette.green.main,
      boxShadow:
        '0 12px 20px -10px rgba(' +
        theme.hexToRgb(theme.palette.green.main) +
        ',.28), 0 4px 20px 0 rgba(' +
        theme.hexToRgb(theme.palette.common.black) +
        ',.12), 0 7px 8px -5px rgba(' +
        theme.hexToRgb(theme.palette.green.main) +
        ',.2)',
    },
  },
  orange: {
    backgroundColor: theme.palette.orange.main,
    boxShadow:
      '0 12px 20px -10px rgba(' +
      theme.hexToRgb(theme.palette.orange.main) +
      ',.28), 0 4px 20px 0 rgba(' +
      theme.hexToRgb(theme.palette.common.black) +
      ',.12), 0 7px 8px -5px rgba(' +
      theme.hexToRgb(theme.palette.orange.main) +
      ',.2)',
    '&:hover,&:focus': {
      backgroundColor: theme.palette.orange.main,
      boxShadow:
        '0 12px 20px -10px rgba(' +
        theme.hexToRgb(theme.palette.orange.main) +
        ',.28), 0 4px 20px 0 rgba(' +
        theme.hexToRgb(theme.palette.common.black) +
        ',.12), 0 7px 8px -5px rgba(' +
        theme.hexToRgb(theme.palette.orange.main) +
        ',.2)',
    },
  },
  red: {
    backgroundColor: theme.palette.red.main,
    boxShadow:
      '0 12px 20px -10px rgba(' +
      theme.hexToRgb(theme.palette.red.main) +
      ',.28), 0 4px 20px 0 rgba(' +
      theme.hexToRgb(theme.palette.common.black) +
      ',.12), 0 7px 8px -5px rgba(' +
      theme.hexToRgb(theme.palette.red.main) +
      ',.2)',
    '&:hover,&:focus': {
      backgroundColor: theme.palette.red.main,
      boxShadow:
        '0 12px 20px -10px rgba(' +
        theme.hexToRgb(theme.palette.red.main) +
        ',.28), 0 4px 20px 0 rgba(' +
        theme.hexToRgb(theme.palette.common.black) +
        ',.12), 0 7px 8px -5px rgba(' +
        theme.hexToRgb(theme.palette.red.main) +
        ',.2)',
    },
  },
  background: {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '1',
    height: '100%',
    width: '100%',
    display: 'block',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    '&:after': {
      position: 'absolute',
      zIndex: '2',
      width: '100%',
      height: '100%',
      content: '""',
      background: theme.palette.common.black,
      opacity: '.8',
    },
  },
});

export default sidebarStyle;
