import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import SellersPage from '../components/SellersPage'
import Footer from '../components/Footer'

export default function Sellers() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <SellersPage />
      <Footer />
    </Box>
  )
}