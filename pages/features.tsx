import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import FeaturesOverviewPage from '../components/FeaturesOverviewPage'
import Footer from '../components/Footer'

export default function Features() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <FeaturesOverviewPage />
      <Footer />
    </Box>
  )
}