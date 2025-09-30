import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Modal, Fade, Backdrop } from '@mui/material'

export default function MembershipTypes() {
  const router = useRouter()
  const membershipsData = [
    {
      title: 'Local Members',
      description: 'Join the heartbeat of your town. Swap skills, share tools, find events, or simply find your people.',
      cta: 'Join Now',
      page: '/community',
      details: 'As a Local Member, you gain access to exclusive events, resource sharing, and a vibrant community eager to connect and collaborate.',
    },
    {
      title: 'Event Hosts',
      description: 'Your moment, your masterpiece. Set the scene, make the invite, and let the magic unfold.',
      cta: 'Start Hosting',
      page: '/community',
      details: 'Event Hosts can create, manage, and promote events effortlessly. Engage your community with memorable experiences and track engagement metrics.',
    },
    {
      title: 'Sellers',
      description: 'Your storefront in the village square. Share what you create with those who\'ll love it most.',
      cta: 'Open Shop',
      page: '/features',
      details: 'Sellers can set up their own storefronts, showcase products, and reach customers who value the local touch and craftsmanship.',
    },
    {
      title: 'Gig Workers',
      description: 'Your skills, your schedule. Find gigs, build your portfolio, and connect with local clients.',
      cta: 'Register Now',
      page: '/features',
      details: 'Gig Workers can find local opportunities, showcase their skills, and connect with clients who value their expertise and dedication.',
    },
    {
      title: 'Organizations',
      description: 'Your mission, our platform. Unite your team, manage your projects, rally your community.',
      cta: 'Register Now',
      page: '/about',
      details: 'Organizations can create profiles, manage projects, coordinate teams, and engage with the community to drive impactful initiatives.',
    },
    {
      title: 'Stewardship',
      description: 'Your stake, your say. Shape the platform, share in the success, and build a better future.',
      cta: 'Register Now',
      page: '/about',
      details: 'Stewards can participate in governance, propose initiatives, and share in the platform\'s success through a profit stake in the cooperative.',
    },
  ]

  const [openModal, setOpenModal] = React.useState(false)
  const [selectedMembership, setSelectedMembership] = React.useState<any>(null)

  const handleOpenModal = (membership: any) => {
    setSelectedMembership(membership)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedMembership(null)
  }

  return (
    <Box mt={12} mb={12}>
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 8 }}>
        How Will You Show Up?
      </Typography>
      <Grid container spacing={4}>
        {membershipsData.map((membership) => (
          <Grid item xs={12} sm={6} md={3} key={membership.title}>
            <Card
              onClick={() => handleOpenModal(membership)}
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
              aria-labelledby={`membership-${membership.title}`}
            >
              <CardContent sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                  {membership.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, textAlign: 'center' }}>
                  {membership.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ position: 'relative', zIndex: 2 }}>
                <Button variant="contained" color="primary" fullWidth size="large">
                  {membership.cta}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        aria-labelledby="membership-modal-title"
        aria-describedby="membership-modal-description"
      >
        <Fade in={openModal}>
          <Box className="modalContent">
            {selectedMembership && (
              <>
                <Typography id="membership-modal-title" variant="h5" component="h2" sx={{ mb: 2 }}>
                  {selectedMembership.title}
                </Typography>
                <Typography id="membership-modal-description" sx={{ mb: 4 }}>
                  {selectedMembership.details}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleCloseModal();
                    // Extract the base path and add tab parameter
                    const basePath = selectedMembership.page.split('?')[0];
                    // Get the tab index based on the membership type
                    let tabIndex = 1;
                    if (selectedMembership.title === 'Local Members') tabIndex = 1;
                    else if (selectedMembership.title === 'Event Hosts') tabIndex = 2;
                    else if (selectedMembership.title === 'Sellers') tabIndex = 3;
                    else if (selectedMembership.title === 'Gig Workers') tabIndex = 3;
                    else if (selectedMembership.title === 'Organizations') tabIndex = 4;
                    else if (selectedMembership.title === 'Stewardship') tabIndex = 4;
                    
                    // Navigate to the appropriate section using Next.js router
                    router.push({
                      pathname: basePath,
                      query: { tab: tabIndex }
                    });
                  }}
                >
                  Learn More
                </Button>
                <Button variant="text" color="secondary" onClick={handleCloseModal} sx={{ ml: 2 }}>
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