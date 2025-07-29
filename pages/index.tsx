import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import LandingPage from '../components/LandingPage'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <LandingPage />
      <Footer />
    </Box>
  )
}