import React from 'react'
import { Container, Typography } from '@mui/material'

export default function PrivacyPolicyPage() {
  return (
    <Container sx={{ py: 12, minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 8 }}>
        Privacy Policy
      </Typography>
      <Typography variant="body1" sx={{ mb: 6 }}>
        Your privacy is important to us. This policy explains how we handle your personal data.
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        [Detailed information about data collection, usage, and user rights.]
      </Typography>
    </Container>
  )
}
