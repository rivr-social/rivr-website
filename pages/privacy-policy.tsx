import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import PrivacyPolicyPage from '../components/PrivacyPolicyPage'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <PrivacyPolicyPage />
      <Footer />
    </Box>
  )
}