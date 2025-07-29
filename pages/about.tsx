import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import AboutOverviewPage from '../components/AboutOverviewPage'
import Footer from '../components/Footer'

export default function About() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <AboutOverviewPage />
      <Footer />
    </Box>
  )
}