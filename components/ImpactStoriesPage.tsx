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
          <Card sx={{
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
          }}>
            <CardContent sx={{ position: 'relative', zIndex: 2 }}>
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
