import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import ImpactStoriesPage from '../components/ImpactStoriesPage'
import Footer from '../components/Footer'

export default function ImpactStories() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <ImpactStoriesPage />
      <Footer />
    </Box>
  )
}