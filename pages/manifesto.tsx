import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import ManifestoPage from '../components/ManifestoPage'
import Footer from '../components/Footer'

export default function Manifesto() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <ManifestoPage />
      <Footer />
    </Box>
  )
}