import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1E2022'
    },
    secondary: {
      main: '#302E53'
    },
    info: {
      main: 'rgba(208, 112, 23, 0.8)'
    },
    text: {
      primary: '#1E2022'
    }
  },
  typography: {
    allVariants: {
      color: '#1E2022'
    },
    fontFamily: 'Roboto Condensed'
  }
})