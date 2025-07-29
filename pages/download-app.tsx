import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import DownloadAppPage from '../components/DownloadAppPage'
import Footer from '../components/Footer'

export default function DownloadApp() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <DownloadAppPage />
      <Footer />
    </Box>
  )
}