import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import CommunityOverviewPage from '../components/CommunityOverviewPage'
import Footer from '../components/Footer'

export default function Community() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <CommunityOverviewPage />
      <Footer />
    </Box>
  )
}