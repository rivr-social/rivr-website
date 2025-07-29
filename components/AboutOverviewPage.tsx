import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Typography, Tabs, Tab } from '@mui/material'
import ManifestoPage from './ManifestoPage'
import TeamPage from './TeamPage'
import WhitepaperPage from './WhitepaperPage'
import InvestorsPage from './InvestorsPage'

export default function AboutOverviewPage() {
  const router = useRouter()

  // Handle scroll to section on mount if hash is present
  useEffect(() => {
    if (router.asPath.includes('#')) {
      const hash = router.asPath.split('#')[1]
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [router.asPath])

  const handleTabClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box
        sx={{
          width: 240,
          bgcolor: 'rgba(0, 0, 0, 0.3)',
          borderRight: '1px solid rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          py: 2,
          position: 'sticky',
          top: 80,
          height: 'fit-content',
          maxHeight: 'calc(100vh - 100px)',
          overflowY: 'auto'
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4, color: 'white !important' }}>
          About
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box
            component="button"
            onClick={() => handleTabClick('overview')}
            sx={{
              background: 'none',
              border: 'none',
              textAlign: 'left',
              p: 2,
              color: 'white !important',
              cursor: 'pointer',
              borderRadius: 1,
              '&:hover': {
                backgroundColor: 'rgba(219, 153, 54, 0.1)',
                color: '#db9936 !important'
              }
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 500 }}>Overview</Typography>
          </Box>
          <Box
            component="button"
            onClick={() => handleTabClick('manifesto')}
            sx={{
              background: 'none',
              border: 'none',
              textAlign: 'left',
              p: 2,
              color: 'white !important',
              cursor: 'pointer',
              borderRadius: 1,
              '&:hover': {
                backgroundColor: 'rgba(219, 153, 54, 0.1)',
                color: '#db9936 !important'
              }
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 500 }}>Manifesto</Typography>
          </Box>
          <Box
            component="button"
            onClick={() => handleTabClick('team')}
            sx={{
              background: 'none',
              border: 'none',
              textAlign: 'left',
              p: 2,
              color: 'white !important',
              cursor: 'pointer',
              borderRadius: 1,
              '&:hover': {
                backgroundColor: 'rgba(219, 153, 54, 0.1)',
                color: '#db9936 !important'
              }
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 500 }}>Team</Typography>
          </Box>
          <Box
            component="button"
            onClick={() => handleTabClick('whitepaper')}
            sx={{
              background: 'none',
              border: 'none',
              textAlign: 'left',
              p: 2,
              color: 'white !important',
              cursor: 'pointer',
              borderRadius: 1,
              '&:hover': {
                backgroundColor: 'rgba(219, 153, 54, 0.1)',
                color: '#db9936 !important'
              }
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 500 }}>Whitepaper</Typography>
          </Box>
          <Box
            component="button"
            onClick={() => handleTabClick('investors')}
            sx={{
              background: 'none',
              border: 'none',
              textAlign: 'left',
              p: 2,
              color: 'white !important',
              cursor: 'pointer',
              borderRadius: 1,
              '&:hover': {
                backgroundColor: 'rgba(219, 153, 54, 0.1)',
                color: '#db9936 !important'
              }
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 500 }}>Investors</Typography>
          </Box>
        </Box>
      </Box>

      <Container sx={{ flexGrow: 1, py: 2 }}>
        {/* Overview Section */}
        <Box id="overview" sx={{ mt: 4, mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            About Rivr
          </Typography>
          <Typography variant="h6" sx={{ color: '#ffffff', mb: 4 }}>
            Building the future of community connection and local resilience.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Rivr is more than just a social platform — it's a movement toward genuine community connection and local economic resilience. We believe that the strongest communities are built on relationships, mutual support, and the free flow of resources and skills among neighbors.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Our mission is to create technology that empowers people to build meaningful connections, share resources efficiently, and create thriving local economies. Through innovative features like skill sharing, event coordination, and local marketplace integration, we're helping communities become more self-reliant and interconnected.
          </Typography>
          
          <Box sx={{ mt: 6, mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              We envision a world where every community has the tools and connections it needs to thrive independently. Where neighbors know each other, support each other, and create abundance together. Where technology serves humanity rather than extracting from it.
            </Typography>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Our Values
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              <strong>Community First:</strong> Every decision we make prioritizes the wellbeing of communities and their members.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              <strong>Local Resilience:</strong> We believe strong local economies create more resilient, sustainable communities.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              <strong>Authentic Connection:</strong> We facilitate real relationships between real people, not algorithmic engagement.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              <strong>Transparency:</strong> We operate with openness and honesty in all our endeavors.
            </Typography>
          </Box>
        </Box>

        {/* Manifesto Section */}
        <Box id="manifesto" sx={{ mb: 8 }}>
          <ManifestoPage />
        </Box>

        {/* Team Section */}
        <Box id="team" sx={{ mb: 8 }}>
          <TeamPage />
        </Box>

        {/* Whitepaper Section */}
        <Box id="whitepaper" sx={{ mb: 8 }}>
          <WhitepaperPage />
        </Box>

        {/* Investors Section */}
        <Box id="investors" sx={{ mb: 8 }}>
          <InvestorsPage />
        </Box>
      </Container>
    </Box>
  )
}