import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import WhitepaperPage from '../components/WhitepaperPage'
import Footer from '../components/Footer'

export default function Whitepaper() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <WhitepaperPage />
      <Footer />
    </Box>
  )
}