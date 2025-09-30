import React from 'react'
import { Box, Typography, Grid, Card, CardContent, Modal, Fade, Backdrop, Button } from '@mui/material'
import { ConnectWithoutContact, Share, School, Gavel } from '@mui/icons-material'

export default function FeaturesSection() {
  const featuresData = [
    {
      title: 'Connect',
      description: 'A message away from neighbors you haven\'t met yet.',
      icon: ConnectWithoutContact,
      details: 'Connect with your local community members through group pages. Share interests, organize meetups, and build meaningful relationships effortlessly.',
    },
    {
      title: 'Share',
      description: 'Tools, time, talents — give what you can, receive what you need.',
      icon: Share,
      details: 'Share resources, offer your skills, and collaborate on projects. Whether you need assistance or can offer help, Rivr makes sharing easy and impactful.',
    },
    {
      title: 'Skill Development',
      description: 'Workshops, mentorships, hands-on learning — grow your gifts.',
      icon: School,
      details: 'Enhance your skills through community-driven workshops and mentorship programs. Learn from experts and share your knowledge to foster collective growth.',
    },
    {
      title: 'Governance',
      description: 'Democracy in action. Voice your vision, shape your surroundings.',
      icon: Gavel,
      details: 'Participate in community governance. Vote on initiatives, propose new projects, and ensure that the platform evolves according to the community\'s needs.',
    },
  ]

  const [openModal, setOpenModal] = React.useState(false)
  const [selectedFeature, setSelectedFeature] = React.useState<any>(null)

  const handleOpenModal = (feature: any) => {
    setSelectedFeature(feature)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedFeature(null)
  }

  return (
    <Box mt={12} mb={12} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ color: '#ffffff', mb: 1 }}>
        We are Transforming how we Social Network.
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 8 }}>
        Explore What We Offer
      </Typography>
      <Grid container spacing={6}>
        {featuresData.map((feature) => {
          const IconComponent = feature.icon
          return (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Card 
                onClick={() => handleOpenModal(feature)} 
                sx={{ 
                  cursor: 'pointer',
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
                }} 
                aria-labelledby={`feature-${feature.title}`}
              >
                <CardContent sx={{ position: 'relative', zIndex: 2 }}>
                  <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
                    <IconComponent color="primary" sx={{ fontSize: 60 }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mt: 4 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#ffffff', mt: 2, textAlign: 'center' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        aria-labelledby="feature-modal-title"
        aria-describedby="feature-modal-description"
      >
        <Fade in={openModal}>
          <Box className="modalContent">
            {selectedFeature && (
              <>
                <Typography id="feature-modal-title" variant="h5" component="h2" sx={{ mb: 2 }}>
                  {selectedFeature.title}
                </Typography>
                <Typography id="feature-modal-description" sx={{ mb: 4 }}>
                  {selectedFeature.details}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleCloseModal}>
                  Close
                </Button>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}