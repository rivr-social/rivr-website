import React from 'react'
import { Box, Typography, Grid, Card, CardContent, Avatar, Modal, Fade, Backdrop, Button } from '@mui/material'
import { groups } from '../data/groups'
import { users } from '../data/users'

export default function TeamSection() {
  const [openModal, setOpenModal] = React.useState(false)
  const [selectedMember, setSelectedMember] = React.useState<any>(null)

  const handleOpenModal = (member: any) => {
    setSelectedMember(member)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedMember(null)
  }

  return (
    <Box mt={12} mb={12}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 8 }} align="center">
        Meet the Team
      </Typography>
      <Grid container spacing={4}>
        {groups.map((group, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              {group.name}
            </Typography>
            <Grid container spacing={2}>
              {group.members
                .map((memberId) => users.find((user) => user.id === memberId))
                .filter((member) => member && member.name !== 'Open Position')
                .map((member) => (
                  <Grid item xs={12} key={member!.id}>
                    <Card
                      onClick={() => handleOpenModal(member)}
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
                    >
                      <CardContent sx={{ position: 'relative', zIndex: 2 }}>
                        <Avatar
                          src={member!.image}
                          alt={member!.name}
                          sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                        />
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 'bold', textAlign: 'center' }}
                        >
                          {member!.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: 'center', color: '#ffffff' }}
                        >
                          {member!.role}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        aria-labelledby="team-modal-title"
        aria-describedby="team-modal-description"
      >
        <Fade in={openModal}>
          <Box className="modalContent">
            {selectedMember && (
              <>
                <Typography
                  id="team-modal-title"
                  variant="h5"
                  component="h2"
                  sx={{ mb: 2 }}
                >
                  {selectedMember.name}
                </Typography>
                <Typography id="team-modal-description" sx={{ mb: 4 }}>
                  <strong>Role:</strong> {selectedMember.role}
                  <br />
                  <br />
                  {selectedMember.bio}
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