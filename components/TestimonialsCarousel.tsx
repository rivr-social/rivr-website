import React from 'react'
import { Container, Typography, Box, Avatar, IconButton } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      avatar: 'https://i.pravatar.cc/100?img=1',
      name: 'Emily R.',
      role: 'Local Member',
      quote: '"I found my neighbors, my friends, my sense of belonging."',
    },
    {
      avatar: 'https://i.pravatar.cc/100?img=2',
      name: 'Michael T.',
      role: 'Event Host',
      quote: '"Hosting through ONE Local made our festival a homegrown success."',
    },
    {
      avatar: 'https://i.pravatar.cc/100?img=3',
      name: 'Sarah L.',
      role: 'Seller',
      quote: '"This platform brought customers who appreciate the local touch."',
    },
    {
      avatar: 'https://i.pravatar.cc/100?img=4',
      name: 'David G.',
      role: 'Organization Leader',
      quote: '"Our projects have a real heartbeat now — we\'re more than just a team."',
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Container sx={{ py: 12 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 8 }}>
        What Our Members Say
      </Typography>
      <Box sx={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
        <Box className="testimonial">
          <Avatar
            src={testimonials[currentTestimonial].avatar}
            alt={testimonials[currentTestimonial].name}
            className="testimonial-avatar"
          />
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            {testimonials[currentTestimonial].name}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#ffffff', mb: 2 }}>
            {testimonials[currentTestimonial].role}
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
            {testimonials[currentTestimonial].quote}
          </Typography>
        </Box>
        <IconButton
          className="carousel-button left"
          onClick={prevTestimonial}
          aria-label="Previous Testimonial"
          sx={{ position: 'absolute', top: '50%', left: '-30px', transform: 'translateY(-50%)' }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          className="carousel-button right"
          onClick={nextTestimonial}
          aria-label="Next Testimonial"
          sx={{ position: 'absolute', top: '50%', right: '-30px', transform: 'translateY(-50%)' }}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Container>
  )
}