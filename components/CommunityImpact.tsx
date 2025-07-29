import React from 'react'
import { Box, Typography, Grid } from '@mui/material'

export default function CommunityImpact() {
  const metrics = [
    { value: '3,800', label: 'Total Members', description: 'Real people, real connections. Find your tribe.' },
    { value: '389,386', label: '$ Local Economic Activity', description: 'Supplying viable income to residents' },
    { value: '395,877', label: 'Gratitude Points Circulated', description: 'out of 109,880 minted - a 3x circular return.' },
    { value: '3,605', label: 'Events Hosted', description: 'Celebrate, learn, and dance in the streets.' },
  ]

  const [count, setCount] = React.useState<Record<string, number>>({
    'Total Members': 0,
    '$ Local Economic Activity': 0,
    'Gratitude Points Circulated': 0,
    'Events Hosted': 0,
  })

  React.useEffect(() => {
    metrics.forEach(metric => {
      const target = parseInt(metric.value.replace(/,/g, ''))
      let current = 0
      const increment = target / 200

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCount(prev => ({
          ...prev,
          [metric.label]: Math.floor(current),
        }))
      }, 30)
    })
  }, [])

  return (
    <Box mt={12} mb={12}>
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 8 }}>
        Our Community in Numbers
      </Typography>
      <Grid container spacing={6}>
        {metrics.map((metric) => (
          <Grid item xs={12} sm={6} md={3} key={metric.label}>
            <Box textAlign="center">
              <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
                {count[metric.label].toLocaleString()}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 2 }}>
                {metric.label}
              </Typography>
              <Typography variant="body1" sx={{ color: '#ffffff', mt: 2 }}>
                {metric.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}