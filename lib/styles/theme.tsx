import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { colors } from 'lib/styles/colors';

// Create a theme instance.

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.blueIndigo,
    },
    secondary: {
      main: colors.redCabaret,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: colors.white,
    },
    text: {
      primary: '#000',
      secondary: '#fff',
      hint: '#393b88',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Raleway", "Roboto", "Helvetica", Arial, sans-serif',
      fontWeight: 800,
      lineHeight: 60 / 52,
      fontSize: 52,
    },
    h2: {
      fontFamily: '"Raleway", "Roboto", "Helvetica", Arial, sans-serif',
      fontWeight: 800,
      lineHeight: 44 / 38,
      fontSize: 38,
      marginBottom: 22,
    },
    h3: {
      fontFamily: '"Raleway", "Roboto", "Helvetica", Arial, sans-serif',
      fontWeight: 500,
      lineHeight: 1,
      fontSize: 24,
      marginBottom: 22,
    },
    h4: {
      fontFamily: '"Raleway", "Roboto", "Helvetica", Arial, sans-serif',
      fontWeight: 600,
      fontSize: 18,
    },
    h5: {
      fontFamily: '"Lato", "Roboto", "Helvetica", Arial, sans-serif',
      fontWeight: 600,
      fontSize: 18,
    },
    h6: {
      fontFamily: '"Lato", "Roboto", "Helvetica", Arial, sans-serif',
      fontWeight: 600,
      fontSize: 16,
      marginBottom: 16,
    },
    subtitle1: {
      fontFamily: ', "Roboto", "Helvetica", Arial, sans-serif',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 30 / 18,
    },
    subtitle2: {
      fontFamily: '"Raleway", "Roboto", "Helvetica", Arial, sans-serif',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 40 / 18,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    body1: {
      fontFamily: '"Lato", "Roboto", "Helvetica", Arial, sans-serif',
    },
    body2: {
      fontFamily: '"Lato", "Roboto", "Helvetica", Arial, sans-serif',
      fontSize: 13,
      color: colors.dustyGray,
    },
  },
  shadows: [
    'none',
    '0px 10px 50px rgba(0, 0, 0, 0.15)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],
  shape: {
    borderRadius: 12,
  },
  overrides: {
    MuiSvgIcon: {
      colorAction: {
        color: colors.amazonGreen,
      },
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: '1rem',
      },
    },
    MuiFormLabel: {
      root: {
        color: colors.blueChambray,
      },
    },
    MuiButton: {
      root: {
        minWidth: 130,
        textTransform: 'unset',
        borderRadius: 48,
        '&$disabled': {
          border: 'none',
        },
      },
      contained: {
        border: '3px solid #45539F',
      },
      outlined: {
        border: `3px solid ${colors.blueIndigo}`,
        padding: '6px 16px',
      },
      outlinedPrimary: {
        border: `3px solid ${colors.blueIndigo}`,
        '&:hover': {
          border: `3px solid ${colors.blueIndigo}`,
        },
      },
    },
    MuiPaper: {
      outlined: {},
    },
    MuiFormHelperText: {
      root: { color: `${colors.black}`, fontSize: 14 },
    },
    // @ts-ignore
    MUIDataTable: {
      root: {
        backgroundColor: '#AAF',
      },
      paper: {
        boxShadow: 'none',
        borderRadius: 0,
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: 12,
        padding: 15,
      },
    },
  },
});

export default responsiveFontSizes(theme);
