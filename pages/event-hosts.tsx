import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import EventHostsPage from '../components/EventHostsPage'
import Footer from '../components/Footer'

export default function EventHosts() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <EventHostsPage />
      <Footer />
    </Box>
  )
}