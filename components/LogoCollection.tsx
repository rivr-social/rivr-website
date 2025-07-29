import React from 'react'
import { Box, Typography, Grid, Modal, Fade, Backdrop, Button } from '@mui/material'
import { organization } from '../data/organization'

export default function LogoCollection() {
  const logoStyle = {
    maxWidth: '180px',
    maxHeight: '100px',
    width: 'auto',
    height: 'auto',
    margin: '20px',
    opacity: 1,
    cursor: 'pointer',
    objectFit: 'contain' as const,
    display: 'block',
  }

  const [openModal, setOpenModal] = React.useState(false)
  const [selectedOrganization, setSelectedOrganization] = React.useState<any>(null)

  const handleOpenModal = (org: any) => {
    setSelectedOrganization(org)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedOrganization(null)
  }

  return (
    <Box id="logoCollection" sx={{ py: 8, px: 2, textAlign: 'center' }}>
      <Typography variant="h6" sx={{ color: '#ffffff', mb: 1 }}>
        Together, we are destined for greatness.
      </Typography>
      <Typography variant="body2" sx={{ color: '#ffffff', mb: 2 }}>
        Our vision is a collective vision.
      </Typography>
      <Typography
        component="p"
        variant="h4"
        align="center"
        sx={{ color: '#ffffff', mb: 6 }}
      >
        Affiliated Orgs
      </Typography>
      <Grid
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
        }}
      >
        {organization.affiliatedOrganizations.map((aff) => (
          <Grid
            item
            key={aff.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '150px',
              height: '200px',
            }}
          >
            <img
              src={aff.logo}
              alt={aff.name}
              style={logoStyle}
              onClick={() => handleOpenModal(aff)}
            />
          </Grid>
        ))}
      </Grid>

      {/* Explore Button */}
      <Box sx={{ mt: 4 }}>
        <Button variant="outlined" color="primary" size="large">
          How we flow together
        </Button>
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="organization-modal-title"
        aria-describedby="organization-modal-description"
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '80%', sm: '60%', md: '40%' },
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            {selectedOrganization && (
              <>
                <Typography
                  id="organization-modal-title"
                  variant="h5"
                  component="h2"
                  sx={{ mb: 2, textAlign: 'center' }}
                >
                  {selectedOrganization.name}
                </Typography>
                <Typography
                  id="organization-modal-description"
                  sx={{ mb: 4, textAlign: 'center' }}
                >
                  {selectedOrganization.description ||
                    'No description available.'}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      window.open(selectedOrganization.url, '_blank')
                    }
                    sx={{ mr: 2 }}
                  >
                    Visit Website
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}