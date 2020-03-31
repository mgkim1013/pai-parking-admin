import { createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const sidebarSpacing1 = '15px'; // left, right
const sidebarSpacing2 = '10px'; // top, bottom

const primaryColor = ['#9c27b0', '#ab47bc', '#8e24aa'];
const secondaryColor = ['#e91e63', '#ec407a', '#d81b60'];
const warningColor = ['#ff9800', '#ffa726', '#fb8c00'];
const errorColor = ['#f44336', '#ef5350', '#e53935'];
const infoColor = ['#00acc1', '#26c6da', '#00acc1'];
const successColor = ['#4caf50', '#66bb6a', '#43a047'];

const theme = createMuiTheme({
  // common
  palette: {
    primary: {
      main: primaryColor[0],
      light: primaryColor[1],
      dark: primaryColor[2],
    },
    secondary: {
      main: secondaryColor[0],
      light: secondaryColor[1],
      dark: secondaryColor[2],
    },
    error: {
      main: errorColor[0],
      light: errorColor[1],
      dark: errorColor[2],
    },
    warning: {
      main: warningColor[0],
      light: warningColor[1],
      dark: warningColor[2],
    },
    info: {
      main: infoColor[0],
      light: infoColor[1],
      dark: infoColor[2],
    },
    success: {
      main: successColor[0],
      light: successColor[1],
      dark: successColor[2],
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
  hexToRgb: input => {
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
  headerHeight: 64,
  // footer
  footerHeight: 50,
  footerBorderTop: '1px solid ' + grey[300],
  footerFontSize: '12px',
  // content
  contentPadding: '0px 30px',
  contentColor: '#3C4858',
  contentTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
});

export default theme;
