import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import InvestorsPage from '../components/InvestorsPage'
import Footer from '../components/Footer'

export default function Investors() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <InvestorsPage />
      <Footer />
    </Box>
  )
}