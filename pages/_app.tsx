import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '../styles/theme'
import '../styles/globals.css'
import WebGLBackground from '../components/WebGLBackground'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WebGLBackground />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}