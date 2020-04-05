import { createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const sidebarSpacing1 = '15px'; // left, right
const sidebarSpacing2 = '10px'; // top, bottom
const headerHeight = 64;
const footerHeight = 50;

const purple = ['#9c27b0', '#ab47bc', '#8e24aa'];
const pink = ['#e91e63', '#ec407a', '#d81b60'];
const orange = ['#ff9800', '#ffa726', '#fb8c00'];
const red = ['#f44336', '#ef5350', '#e53935'];
const blue = ['#00acc1', '#26c6da', '#00acc1'];
const green = ['#4caf50', '#66bb6a', '#43a047'];

const theme = createMuiTheme({
  // common
  palette: {
    purple: {
      main: purple[0],
      light: purple[1],
      dark: purple[2],
    },
    pink: {
      main: pink[0],
      light: pink[1],
      dark: pink[2],
    },
    orange: {
      main: orange[0],
      light: orange[1],
      dark: orange[2],
    },
    red: {
      main: red[0],
      light: red[1],
      dark: red[2],
    },
    blue: {
      main: blue[0],
      light: blue[1],
      dark: blue[2],
    },
    green: {
      main: green[0],
      light: green[1],
      dark: green[2],
    },
  },
  typography: {
    // header
    h1: {
      fontSize: '22px',
      fontWeight: 700,
    },
    // sidebar logo
    h2: {
      fontSize: '22px',
      fontWeight: 400,
    },
    h3: {},
  },
  hexToRgb: (input) => {
    input = input + '';
    input = input.replace('#', '');
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
      throw new Error('input is not a valid hex color.');
    }
    if (input.length === 3) {
      let first = input[0];
      let second = input[1];
      let last = input[2];
      input = first + first + second + second + last + last;
    }
    input = input.toUpperCase(input);
    let first = input[0] + input[1];
    let second = input[2] + input[3];
    let last = input[4] + input[5];
    return parseInt(first, 16) + ', ' + parseInt(second, 16) + ', ' + parseInt(last, 16);
  },
  // sidebar
  drawerWidth: 250,
  sidebarLogoImgSize: 24,
  sidebarSpacing1: sidebarSpacing1,
  sidebarSpacing2: sidebarSpacing2,
  sidebarDivider: {
    content: '""',
    position: 'absolute',
    right: sidebarSpacing1,
    bottom: '0',
    height: '1px',
    width: `calc(100% - 2 * ${sidebarSpacing1})`,
    backgroundColor: grey[600],
  },
  sidebarItemIconSize: {
    width: '24px',
    height: '30px',
  },
  sidebarItemTextSize: {
    lineHeight: '30px',
    fontSize: '14px',
  },
  // header
  headerHeight: headerHeight,
  // footer
  footerHeight: footerHeight,
  footerBorderTop: '1px solid ' + grey[300],
  footerFontSize: '12px',
  // content
  contentPadding: '0px 30px',
  contentMinHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
  contentColor: '#3C4858',
  contentTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
  // videoReal
  popoverMenuWidth: 120 * 3,
});

export default theme;
