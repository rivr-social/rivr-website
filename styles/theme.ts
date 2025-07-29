import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#db9936' },
    secondary: { main: '#8d6e63' },
    error: { main: '#e57373' },
    background: { default: '#f5f5f5', paper: '#ffffff' },
    text: { primary: '#333333', secondary: '#555555' },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeightBold: 700,
    h2: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
      fontSize: '3rem',
    },
    h4: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h5: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1.2rem',
    },
    body2: {
      fontSize: '1rem',
    },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
          fontWeight: 'bold',
          transition: '0.3s',
        },
        containedPrimary: {
          backgroundColor: '#db9936',
          '&:hover': { backgroundColor: '#c7872b' },
        },
        containedSecondary: {
          backgroundColor: '#8d6e63',
          '&:hover': { backgroundColor: '#7a5e55' },
        },
        outlinedPrimary: {
          borderColor: '#db9936',
          color: '#db9936',
          '&:hover': { backgroundColor: 'rgba(219, 153, 54, 0.1)' },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.85)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '& .MuiMenuItem-root': {
            color: '#333333',
          },
          '& .MuiTypography-root': {
            color: '#333333',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          '& .MuiDialogTitle-root': {
            color: '#333333',
          },
          '& .MuiDialogContentText-root': {
            color: '#333333',
          },
          '& .MuiTypography-root': {
            color: '#333333',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: 'none',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'translateY(-5px)' },
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: '#ffffff',
          '& .MuiTypography-root': {
            color: '#ffffff',
          },
          '& .MuiTypography-h5': {
            color: '#ffffff',
          },
          '& .MuiTypography-body1': {
            color: '#e0e0e0',
          },
          '& .MuiTypography-body2': {
            color: '#e0e0e0',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&::before': { display: 'none' },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#016964',
          '&:hover': {
            backgroundColor: 'rgba(1, 105, 100, 0.1)',
            color: '#db9936',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#333333 !important',
          '&.Mui-selected': {
            color: '#db9936 !important',
          },
        },
      },
    },
  },
})