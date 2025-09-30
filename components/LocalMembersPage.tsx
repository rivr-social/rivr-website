import React from 'react'
import Link from 'next/link'
import { Container, Typography, Button, Box, Grid, Card, CardContent } from '@mui/material'

export default function LocalMembersPage() {
  return (
    <Container sx={{ py: 4, minHeight: '100vh' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
        Local Members
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Want a thriving, connected community?<br />
        Start Here.
      </Typography>
      <Typography variant="h6" sx={{ color: '#ffffff', mb: 4 }}>
        As a member, you're not just part of a platform—you're part of a movement to empower local relationships and resources.
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, mt: 6 }}>
        Core Features
      </Typography>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {[
          {
            title: 'Detailed User Profiles',
            description: 'Create a rich profile showcasing your bio, skills, and interests. Connect with others based on shared passions and expertise within your local chapter.'
          },
          {
            title: 'Interactive Social Feed',
            description: 'Engage with posts, events, and group updates. Use the unique "Thank" feature to send appreciation points, money, or skill vouchers to fellow members.'
          },
          {
            title: 'Personalized Calendar',
            description: 'Your schedule, unified. Automatically track events you\'re attending, job shifts you\'ve claimed, and services you\'ve booked, all in one place with month, week, and day views.'
          },
          {
            title: 'Digital Wallet & Reputation',
            description: 'Manage your personal and group funds in your Wallet. Earn points and skill-based Badges to build your reputation and unlock new opportunities within the community.'
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

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Events & Calendar
        </Typography>
        <Typography variant="h6" sx={{ color: '#ffffff', mb: 3 }}>
          Get involved in local movements, explore local events, bring you life energy and attention towards something that matters.
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {[
            {
              title: 'Discover & Connect',
              description: 'Explore a vibrant calendar of local events, from workshops and classes to community gatherings and festivals. Find activities that match your interests and connect with others who share your passions.'
            },
            {
              title: 'Stay Organized',
              description: 'Easily manage your schedule by adding events to your personalized calendar, receiving reminders, and staying up-to-date on the latest happenings in your community.'
            },
            {
              title: 'Create & Promote',
              description: 'Planning an event? Utilize Rivr\'s tools to create event listings, manage registrations, and promote your event to a wider audience within the community.'
            }
          ].map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
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
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Resource Sharing: Requests & Offers
        </Typography>
        <Typography variant="h6" sx={{ color: '#ffffff', mb: 3 }}>
          Together we have everything, and anything is possible.
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {[
            {
              title: 'Share What You Have',
              description: 'Offer your skills, resources, and expertise to others in the community. Whether it\'s lending a helping hand, sharing tools or equipment, or offering professional services, contribute to a culture of mutual support and collaboration.'
            },
            {
              title: 'Get What You Need',
              description: 'Request specific skills, resources, or assistance from your local network. Connect with individuals who can provide the support you need to complete projects, achieve your goals, or simply navigate everyday challenges.'
            },
            {
              title: 'Build Community',
              description: 'The act of sharing and requesting fosters a sense of community and interconnectedness, reminding us that we are all part of a larger support system.'
            }
          ].map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
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
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Community Profiles
        </Typography>
        <Typography variant="h6" sx={{ color: '#ffffff', mb: 3 }}>
          Witness the living social ecology of your local area.
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {[
            {
              title: 'Connect with Your Neighbors',
              description: 'Explore profiles of fellow community members, discover shared interests, share your astrology and build meaningful connections.'
            },
            {
              title: 'Showcase Your Skills',
              description: 'Create a profile that highlights your unique talents, skills, and experiences. Let others know what you have to offer and how you can contribute to the community.'
            },
            {
              title: 'Find Local Experts',
              description: 'Search for individuals with specific skills or expertise that you need for projects or tasks.'
            }
          ].map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
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
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Interactive Map
        </Typography>
        <Typography variant="h6" sx={{ color: '#ffffff', mb: 3 }}>
          Get a visual view of what is happening near you.
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {[
            {
              title: 'Explore Your Surroundings',
              description: 'Discover local businesses, services, events, and community resources through an interactive map.'
            },
            {
              title: 'Navigate with Ease',
              description: 'Find your way around your community and locate points of interest with ease.'
            },
            {
              title: 'Visualize Connections',
              description: 'See how you\'re connected to others in your community and explore the network of resources and opportunities available to you.'
            }
          ].map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
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
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          In-app Messaging
        </Typography>
        <Typography variant="h6" sx={{ color: '#ffffff', mb: 3 }}>
          Keep communications all in one place
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {[
            {
              title: 'DMs and Message Groups',
              description: 'Direct messaging and group conversations to keep your communication organized and accessible.'
            },
            {
              title: 'Organization Integration',
              description: 'Link message groups to organizations for seamless collaboration and project coordination.'
            },
            {
              title: 'Smart Organization',
              description: 'Sort your messages and groups for easy finding, and pin your favorites to the top so you\'ll never lose them.'
            }
          ].map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
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
      </Box>

      <Link href="/download-app" passHref>
        <Button variant="contained" color="primary" size="large">
          Join Now
        </Button>
      </Link>
    </Container>
  )
}
