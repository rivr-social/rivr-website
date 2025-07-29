import React from 'react'
import Link from 'next/link'
import { Box, Typography, Button } from '@mui/material'

export default function CallToAction() {
  return (
    <Box mt={12} mb={12} textAlign="center">
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
        Help Us Grow
      </Typography>
      <Typography variant="h5" sx={{ color: '#ffffff', mb: 8 }}>
        "Every dollar sown grows a forest of connection."
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ m: 2 }}
        onClick={() => window.alert('Donate Now')}
      >
        Donate Now
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        sx={{ m: 2 }}
        onClick={() => window.alert('Take the Survey')}
      >
        Take the Survey
      </Button>
      <Link href="/investors" passHref>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{ m: 2 }}
        >
          Become an Investor
        </Button>
      </Link>
    </Box>
  )
}