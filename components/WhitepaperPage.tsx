import React from 'react'
import { Container, Typography, Button } from '@mui/material'

export default function WhitepaperPage() {
  return (
    <Container sx={{ py: 12, minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 8 }}>
        Whitepaper
      </Typography>
      <Typography variant="body1" sx={{ mb: 6 }}>
        For those who seek the blueprint, the nuts and bolts — here's our technical roadmap.
      </Typography>
      <Typography variant="body1" sx={{ mb: 6 }}>
        Our whitepaper outlines the technical architecture, security measures, and future developments planned for the Rivr platform.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        size="large" 
        href="https://docs.google.com/document/d/1pOJCHtqIeJ10h6sDk-VsP87xvG86rMGJO6x0AhEzZa0/edit?usp=sharing" 
        target="_blank"
      >
        Download Whitepaper
      </Button>
    </Container>
  )
}