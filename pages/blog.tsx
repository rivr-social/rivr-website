import { Box, Toolbar } from '@mui/material'
import NavigationBar from '../components/NavigationBar'
import BlogPage from '../components/BlogPage'
import Footer from '../components/Footer'

export default function Blog() {
  return (
    <Box className="animatedBackground">
      <NavigationBar />
      <Toolbar />
      <BlogPage />
      <Footer />
    </Box>
  )
}