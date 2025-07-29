import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import FAQPage from '../components/FAQPage'
import Footer from '../components/Footer'

export default function FAQ() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <FAQPage />
      <Footer />
    </Box>
  )
}