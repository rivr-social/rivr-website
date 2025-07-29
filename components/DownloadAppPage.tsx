import React from 'react'
import { Container, Typography, Button } from '@mui/material'

export default function DownloadAppPage() {
  const handleRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
    
    if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.onelocal.app'
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.location.href = 'https://apps.apple.com/us/app/one-local/id1534246640'
    } else {
      window.location.href = 'https://app.onelocal.one'
    }
  }

  return (
    <Container sx={{ py: 12, minHeight: '100vh', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 8 }}>
        Download the App
      </Typography>
      <Typography variant="h5" sx={{ mb: 8 }}>
        Step in, the door is open.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleRedirect}
      >
        Get the App Now
      </Button>
    </Container>
  )
}