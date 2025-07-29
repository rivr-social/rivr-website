import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import LocalMembersPage from '../components/LocalMembersPage'
import Footer from '../components/Footer'

export default function LocalMembers() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <LocalMembersPage />
      <Footer />
    </Box>
  )
}