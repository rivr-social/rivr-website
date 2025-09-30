import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material'
import LocalMembersPage from './LocalMembersPage'
import EventHostsPage from './EventHostsPage'
import SellersPage from './SellersPage'
import OrganizationsPage from './OrganizationsPage'

export default function FeaturesOverviewPage() {
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
          Features
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
            onClick={() => handleTabClick('local-members')}
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
            <Typography variant="body1" sx={{ fontWeight: 500 }}>Local Members</Typography>
          </Box>
          <Box
            component="button"
            onClick={() => handleTabClick('event-hosts')}
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
            <Typography variant="body1" sx={{ fontWeight: 500 }}>Event Hosts</Typography>
          </Box>
          <Box
            component="button"
            onClick={() => handleTabClick('sellers')}
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
            <Typography variant="body1" sx={{ fontWeight: 500 }}>Sellers</Typography>
          </Box>
          <Box
            component="button"
            onClick={() => handleTabClick('organizations')}
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
            <Typography variant="body1" sx={{ fontWeight: 500 }}>Organizations</Typography>
          </Box>
          <Box
            component="button"
            onClick={() => handleTabClick('flowpass')}
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
            <Typography variant="body1" sx={{ fontWeight: 500 }}>FlowPass</Typography>
          </Box>
        </Box>
      </Box>

      <Container sx={{ flexGrow: 1, py: 2 }}>
        {/* Overview Section */}
        <Box id="overview" sx={{ mt: 4, mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            This is the beginning of an Economic Revolution —
          </Typography>
          <Typography variant="h6" sx={{ color: '#ffffff', mb: 4 }}>
            A movement that puts the power back in the hands of the people. Literally.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Imagine a world where every contribution is valued, where every skill and resource can find its perfect match. That's the future we're building with Rivr. Whether it's sharing a skill, organizing an event, or connecting over shared values, the new Rivr. social app is designed to make these exchanges seamless and rewarding. We're introducing features that allow you to create and manage organizations, groups, projects, roles, and tasks with ease, ensuring that you can find or offer the perfect skill or resource for any need. This means more visibility for your events, more support for your projects, and a stronger community fabric woven through shared purpose and mutual support.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            These new coordination services coming to the Rivr. social app will provide users with tangible means to support organizations, events, groups, and individuals to find the perfect match within the community to support the execution of your projects by finding the right person for exactly what you need for exactly what you have to give. Within the app you will be able to create groups, projects, roles, and tasks for each effort you create. If you have matching skills, you will be able to perform a task for the designated reciprocation. If you can find what you need inside your community, you increase the resilience and human connection within it. With every transaction you make with someone nearby, you compound your community's wealth. You put more stake into your homeland. All lands are equally sacred. All people deserve the means to create a beautiful life, and a real connection to the governance of those means.
          </Typography>
          
          <Box sx={{ mt: 6, mb: 4 }}>
            <Typography variant="h6" sx={{ color: '#ffffff', mb: 1 }}>
              A new Rivr.
            </Typography>
            <Typography variant="body2" sx={{ color: '#ffffff', mb: 2 }}>
              Discover new ways to collaborate, co-create and coordinate with your local community, all around the world.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              We're excited to announce the impending release of the new Rivr. social app, with a new look and the same vital features and ever-growing community you've come to love inside ONE|Boulder. This re-release will be burgeoning into a full fledged social coordination platform, for users to participate more deeply in the culture we are co-creating together. A vision long held by everyone who's offered their hearts into this field. This rebuild is focused on adding ways to manage projects, events, and organizations, and we'll be expanding the cultural scope to include more family oriented type events. The rebuilt Rivr. social app will be working to implement exciting new and different features, along with the requests, offers, gratitudes, and event production you're used to. It is important to remember that the app is still in development. New features will roll-out over time. And a smooth, new look to come. To stay connected to the unfolding and find new ways to get involved, join our email list.
            </Typography>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Rivr is a technological and social (r)evolution that empowers our community and our future.
            </Typography>
            <Typography variant="h6" sx={{ color: '#ffffff', mb: 1 }}>
              Features Inside the App
            </Typography>
            <Typography variant="body2" sx={{ color: '#ffffff', mb: 2 }}>
              Here is a glimpse of the many features we have now and the integrations to come.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Rivr is a comprehensive platform designed to empower every aspect of community life. From casual connections to complex collaborative projects, our tools help you build a more resilient, engaged, and prosperous local ecosystem.
            </Typography>
          </Box>
        </Box>

        {/* Local Members Section */}
        <Box id="local-members" sx={{ mb: 8 }}>
          <LocalMembersPage />
        </Box>

        {/* Event Hosts Section */}
        <Box id="event-hosts" sx={{ mb: 8 }}>
          <EventHostsPage />
        </Box>

        {/* Sellers Section */}
        <Box id="sellers" sx={{ mb: 8 }}>
          <SellersPage />
        </Box>

        {/* Organizations Section */}
        <Box id="organizations" sx={{ mb: 8 }}>
          <OrganizationsPage />
        </Box>

        {/* FlowPass Section */}
        <Box id="flowpass" sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            FlowPass Incentivizes Local Thriving
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Local businesses create the downtown experience of Boulder and play a key role in the health of our city by creating places for community to gather and connect. FlowPass is teaming up with values-aligned local businesses to incentivize local spending, community connection, and local resilience through FlowPass.
          </Typography>
          
          <Grid container spacing={4} sx={{ mb: 4 }}>
            {[
              {
                title: 'Win Win Scenario',
                description: 'FlowPass Business Partners benefit from increased values-aligned customers visiting your locations, your business becoming a known staple in the city of Boulder through the local app of over 1,600 engaged users, and supporting the facilitation of in-person community connections.'
              },
              {
                title: 'FlowPass Collaborators',
                description: 'FlowPass Subscribers benefit from being able to claim deals (discounts, BOGO, Happy Hour, to name a few) on their purchases at FlowPass business locations. Visiting FlowPass business locations also increases opportunity to run into friends who are also on the FlowPass app.'
              }
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.5)',
                    borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 2px 2px rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                      transition: 'left 0.5s ease-in-out',
                      zIndex: 1,
                    },
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: '0 16px 50px rgba(0, 0, 0, 0.25)',
                      '&:before': {
                        left: '100%',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 4 }}>
            <Button variant="contained" color="primary" size="large">
              Apply to be a FlowPass Business Partner
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
