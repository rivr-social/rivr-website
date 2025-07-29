import React from 'react'
import { Container, Typography, Box, Button, Link } from '@mui/material'

export default function InvestorsPage() {
  return (
    <Container sx={{ py: 12, minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 8 }}>
        Invest in a New Kind of Social Infrastructure
      </Typography>
      
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          We share a destiny together.
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
          Our vision is a collective vision.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          We know there are thousands of us who share a similar vision, for ourselves, the earth, and our beloved human and non-human relations. This vision, ultimately, is to become, together, the dream of creating "the more beautiful world our hearts know is possible" (Charles Eisenstein). This is not a singular vision sourced from one person or one-point of consciousness, but rather it is a vision that is being ignited through us all…
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8 }}>
        We're building a digital village green. A thriving ecosystem where people,
        businesses, and communities come together to share resources, skills, and
        opportunities. Your investment helps communities reclaim their power—one
        shared resource at a time.
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          How the Co-op Works
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Describes the multi-stakeholder model and member classes.
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Steward Class Shares
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Details benefits for investors (equity, surplus distributions, influence).
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 8 }}>
        For inquiries about how you can become a steward of the future, please
        contact us at{' '}
        <Link href="mailto:admin@onelocal.com" color="secondary">
          admin@onelocal.com
        </Link>.
      </Typography>
      <Box textAlign="center" sx={{ mt: 6 }}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="https://docs.google.com/document/d/18dxdgwnfNOGRvtUnQnadeD2IWXASuKB0stI7XFDaeQs/edit?usp=sharing"
        >
          Join the Rivr — Invest Today
        </Button>
      </Box>
    </Container>
  )
}
