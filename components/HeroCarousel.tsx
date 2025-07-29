import React from 'react'
import { Box, Typography, Button } from '@mui/material'

export default function HeroCarousel() {
  const slides = [
    {
      backgroundImage: "https://i.imgur.com/fyLPbQP.jpeg",
      title: "Find Your Community",
      description: "Enrich Your Life",
    },
    {
      backgroundImage: "https://i.imgur.com/04GmMJX.jpeg",
      title: "Find A Gig",
      description: "Or Build A Gig Economy",
    },
    {
      backgroundImage: "https://i.imgur.com/bwBryua.jpeg",
      title: "Find Markets Near You",
      description: "Or Manage Your Market",
    },
    {
      backgroundImage: "https://i.imgur.com/uV42Kak.jpeg",
      title: "Find a Job",
      description: "Or Find Someone To Help You",
    },
    {
      backgroundImage: "https://i.imgur.com/bOftoQh.jpeg",
      title: "Borrow Equipment",
      description: "Or Loan Hardware You Own",
    },
    {
      backgroundImage: "https://i.imgur.com/FHUtipl.jpeg",
      title: "Find Wellness Professionals",
      description: "Or Offer Your Services To Others",
    },
    {
      backgroundImage: "https://i.imgur.com/NnjQlnv.jpeg",
      title: "Find Business Opportunities",
      description: "Or Manage Your Organization",
    },
    {
      backgroundImage: "https://i.imgur.com/04GmMJX.jpeg",
      title: "Find Events Near You",
      description: "Or Manage And Promote Events",
    },
  ]

  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // 5 seconds per slide
    return () => clearInterval(timer) // Cleanup on unmount
  }, [slides.length])

  return (
    <Box>
      {/* Header Text */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, maxWidth: '800px', mx: 'auto' }}>
          "The foundation of our mission has always been to connect people with the things humans really need. The true nourishing things…"
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          height: "600px",
          overflow: "hidden",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: 0,
            left: `${(index - currentSlide) * 100}%`,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "left 0.8s ease-in-out",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              color: "white",
              textAlign: "left",
              paddingLeft: "40px",
              paddingRight: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: "calc(2rem + 1vw)", // Dynamic font size scaling
                lineHeight: 1.2, // Prevent overlapping
              }}
            >
              {slide.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "calc(1rem + 0.5vw)", // Dynamic font size scaling
                lineHeight: 1.4, // Prevent text from being squished
              }}
            >
              {slide.description}
            </Typography>
          </Box>
        </Box>
      ))}
      </Box>

      {/* Explore Button */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="outlined" color="primary" size="large">
          What is the Rivr.
        </Button>
      </Box>
    </Box>
  )
}