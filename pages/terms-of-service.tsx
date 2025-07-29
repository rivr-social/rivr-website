import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import TermsOfServicePage from '../components/TermsOfServicePage'
import Footer from '../components/Footer'

export default function TermsOfService() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <TermsOfServicePage />
      <Footer />
    </Box>
  )
}