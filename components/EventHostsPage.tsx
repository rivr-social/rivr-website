import React from 'react'
import Link from 'next/link'
import { Container, Typography, Button, Box } from '@mui/material'

export default function EventHostsPage() {
  return (
    <Container sx={{ py: 4, minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Whether you're organizing a workshop or a festival, Rivr makes event hosting seamless.
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
        Connect, promote, and create moments that matter.
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Easy Event Creation
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Use intuitive forms to create events, set dates, define locations, and upload imagery. Integrate with the marketplace to book community-owned venues directly.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Ticketing & Registration
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Handle ticketing, RSVPs, and payments effortlessly. Manage attendee lists, see who's registered, and communicate with participants directly from the event page.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Engage Your Audience
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Foster a community around your event with dedicated discussion and updates tabs. Allow attendees to connect and share before, during, and after the event.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Transparent Financials
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8 }}>
          Manage event budgets with a dedicated financials page. Track revenue from ticket sales, log expenses, and handle payouts to contributors in a clear and organized way.
        </Typography>
      </Box>

      <Link href="/download-app" passHref>
        <Button variant="contained" color="primary" size="large">
          Start Hosting Events
        </Button>
      </Link>
    </Container>
  )
}