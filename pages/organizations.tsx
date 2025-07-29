import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import OrganizationsPage from '../components/OrganizationsPage'
import Footer from '../components/Footer'

export default function Organizations() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <OrganizationsPage />
      <Footer />
    </Box>
  )
}