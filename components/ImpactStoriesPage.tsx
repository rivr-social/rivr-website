import React from 'react'
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

export default function ImpactStoriesPage() {
  const stories = [
    {
      title: 'Artisans Unite',
      content: 'Local artists collaborated to host a community art fair, boosting local economy and creativity.',
      image: 'https://via.placeholder.com/600x400?text=Artisans+Unite',
    },
    {
      title: 'Youth Leadership',
      content: 'Teenagers organized workshops to teach seniors how to use technology, bridging generational gaps.',
      image: 'https://via.placeholder.com/600x400?text=Youth+Leadership',
    }
  ]

  const [currentSlide, setCurrentSlide] = React.useState(0)

  return (
    <Container sx={{ py: 12, minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 8 }}>
        Impact Stories
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4 }}>
                {stories[currentSlide].title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {stories[currentSlide].content}
              </Typography>
              <Box className="carousel" sx={{ position: 'relative' }}>
                <img src={stories[currentSlide].image} alt={stories[currentSlide].title} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
