import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Typography } from '@mui/material'
import ImpactStoriesPage from './ImpactStoriesPage'
import BlogPage from './BlogPage'

export default function CommunityOverviewPage() {
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
          Community
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
            onClick={() => handleTabClick('impact-stories')}
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
            <Typography variant="body1" sx={{ fontWeight: 500 }}>Impact Stories</Typography>
          </Box>
          <Box
            component="button"
            onClick={() => handleTabClick('blog')}
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
            <Typography variant="body1" sx={{ fontWeight: 500 }}>Blog</Typography>
          </Box>
        </Box>
      </Box>

      <Container sx={{ flexGrow: 1, py: 2 }}>
        {/* Overview Section */}
        <Box id="overview" sx={{ mt: 4, mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Our Community
          </Typography>
          <Typography variant="h6" sx={{ color: '#ffffff', mb: 4 }}>
            Stories, insights, and connections from the Rivr community.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            The heart of Rivr lies in our vibrant community of neighbors, makers, entrepreneurs, and changemakers who are actively building a more connected and resilient future. Every day, our community members are creating meaningful connections, sharing resources, and supporting each other in ways both big and small.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            From skill-sharing workshops to community gardens, from local business collaborations to neighborhood support networks, our community is proof that another way is possible. A way that prioritizes relationships over transactions, collaboration over competition, and collective thriving over individual accumulation.
          </Typography>
          
          <Box sx={{ mt: 6, mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Community Impact
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Our community has facilitated thousands of connections, supported hundreds of local events, and created countless opportunities for neighbors to support each other. Through the Rivr platform, we've seen the emergence of mutual aid networks, skill-sharing circles, and collaborative projects that strengthen the fabric of our communities.
            </Typography>
          </Box>

          <Box sx={{ mt: 6, mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Stories of Connection
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Behind every feature, every connection, and every exchange on Rivr are real people creating real impact in their communities. Our Impact Stories showcase how community members are using the platform to build the world they want to live in, one connection at a time.
            </Typography>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Join the Conversation
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Our blog features insights from community builders, updates on platform development, and reflections on the future of community-centered technology. We believe in transparency and open dialogue about the challenges and opportunities of building more connected communities.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Whether you're looking for inspiration, practical tips for community building, or updates on Rivr's evolution, our community content offers perspectives from the front lines of the movement toward local resilience and authentic connection.
            </Typography>
          </Box>
        </Box>

        {/* Impact Stories Section */}
        <Box id="impact-stories" sx={{ mb: 8 }}>
          <ImpactStoriesPage />
        </Box>

        {/* Blog Section */}
        <Box id="blog" sx={{ mb: 8 }}>
          <BlogPage />
        </Box>
      </Container>
    </Box>
  )
}