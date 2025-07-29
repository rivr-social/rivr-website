import React from 'react'
import { Container, Typography } from '@mui/material'

export default function TermsOfServicePage() {
  return (
    <Container sx={{ py: 12, minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 8 }}>
        Terms of Service
      </Typography>
      <Typography variant="body1" sx={{ mb: 6 }}>
        Please read these terms of service carefully before using the ONE Local platform.
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        [Legal text outlining user rights, privacy protections, and data usage.]
      </Typography>
    </Container>
  )
}
