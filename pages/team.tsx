import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import TeamPage from '../components/TeamPage'
import Footer from '../components/Footer'

export default function Team() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <TeamPage />
      <Footer />
    </Box>
  )
}