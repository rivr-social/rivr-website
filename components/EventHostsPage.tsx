import React from 'react'
import Link from 'next/link'
import { Container, Typography, Button, Box, Grid, Card, CardContent } from '@mui/material'

export default function EventHostsPage() {
  return (
    <Container sx={{ py: 4, minHeight: '100vh' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
        Event Hosts
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Organizing a workshop or festival?<br />
        Host Seamlessly.
      </Typography>
      <Typography variant="h6" sx={{ color: '#ffffff', mb: 4 }}>
        Connect, promote, and create moments that matter.
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, mt: 6 }}>
        Event Management Tools
      </Typography>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {[
          {
            title: 'Easy Event Creation',
            description: 'Use intuitive forms to create events, set dates, define locations, and upload imagery. Integrate with the marketplace to book community-owned venues directly.'
          },
          {
            title: 'Ticketing & Registration',
            description: 'Handle ticketing, RSVPs, and payments effortlessly. Manage attendee lists, see who\'s registered, and communicate with participants directly from the event page.'
          },
          {
            title: 'Engage Your Audience',
            description: 'Foster a community around your event with dedicated discussion and updates tabs. Allow attendees to connect and share before, during, and after the event.'
          },
          {
            title: 'Transparent Financials',
            description: 'Manage event budgets with a dedicated financials page. Track revenue from ticket sales, log expenses, and handle payouts to contributors in a clear and organized way.'
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

      <Link href="/download-app" passHref>
        <Button variant="contained" color="primary" size="large">
          Start Hosting Events
        </Button>
      </Link>
    </Container>
  )
}