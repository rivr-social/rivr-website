import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import ContactUsPage from '../components/ContactUsPage'
import Footer from '../components/Footer'

export default function ContactUs() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <ContactUsPage />
      <Footer />
    </Box>
  )
}