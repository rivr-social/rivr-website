import React from 'react'
import Link from 'next/link'
import { Container, Typography, Button, Box, Card, CardContent, Grid } from '@mui/material'

export default function OrganizationsPage() {
  const [currentOrgType, setCurrentOrgType] = React.useState(0)

  const organizationTypes = [
    {
      title: "Families Group Features",
      subtitle: "Changing the way we live life together.",
      features: [
        { name: "Feed", description: "Family conversations" },
        { name: "Members", description: "Family directory" },
        { name: "Treasury", description: "Shared finances" },
        { name: "Activity", description: "Recent actions" },
        { name: "About", description: "Family information" },
        { name: "Admins", description: "Family administrators" }
      ]
    },
    {
      title: "Organization Group Features", 
      subtitle: "Changing the way we live life together.",
      features: [
        { name: "About", description: "Organization information" },
        { name: "Feed", description: "Discussion board" },
        { name: "Events", description: "Event management" },
        { name: "Marketplace", description: "Buy and sell items" },
        { name: "Jobs", description: "Employment opportunities" },
        { name: "Badges", description: "Recognition system" },
        { name: "Members", description: "Member directory" },
        { name: "Groups", description: "Subgroups" }
      ]
    },
    {
      title: "Ring Group Features",
      subtitle: "Changing the way we live life together.", 
      features: [
        { name: "Feed", description: "Community discussions" },
        { name: "Families", description: "Family groups" },
        { name: "Mutual Assets", description: "Shared community assets" },
        { name: "Voucher Pool", description: "Community credit system" },
        { name: "Treasury", description: "Shared financial resources" },
        { name: "Governance", description: "Community decision-making" },
        { name: "About", description: "Ring information" },
        { name: "Admins", description: "Management team" }
      ]
    }
  ]

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOrgType((prev) => (prev + 1) % organizationTypes.length)
    }, 8000) // 8 seconds per org type
    return () => clearInterval(timer)
  }, [organizationTypes.length])

  return (
    <Container sx={{ py: 4, minHeight: '100vh' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
        Organizations
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Building an organization?<br />
        Scale Together.
      </Typography>
      <Typography variant="h6" sx={{ color: '#ffffff', mb: 4 }}>
        Rivr helps organizations thrive by connecting them to their communities.
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, mt: 6 }}>
        Organization Features
      </Typography>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {[
          {
            title: 'Nesting and Latticing',
            description: 'Organize your community with a flexible structure. Create top-level Rings, which contain smaller Families, or build standalone Groups and Orgs with customizable features.'
          },
          {
            title: 'Collaborative Projects & Jobs',
            description: 'Launch projects with clear goals. Break down work into Jobs and specific Tasks. Members can claim tasks and track their time with a built-in Work Timer.'
          },
          {
            title: 'Shared Economy Tools',
            description: 'Manage a collective Treasury, a pool of Mutual Assets (like tools or vehicles) for members to book, and a Voucher Pool for exchanging services, all at the group, family, or ring level.'
          },
          {
            title: 'Decentralized Governance',
            description: 'Make decisions together. Create formal Proposals for voting, run informal Polls, and manage member Stakes (profit shares) based on their contributions.'
          }
        ].map((feature, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{
                height: '100%',
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
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, mt: 6 }}>
        Group Types
      </Typography>
      {/* Organization Types Carousel */}
      <Box sx={{ mb: 6 }}>
        <Card sx={{ 
          minHeight: '400px', 
          position: 'relative', 
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderTop: '1px solid rgba(255, 255, 255, 0.5)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 2px 2px rgba(255, 255, 255, 0.1)',
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
          <CardContent sx={{ p: 4, position: 'relative', zIndex: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              {organizationTypes[currentOrgType].title}
            </Typography>
            <Typography variant="h6" sx={{ color: '#ffffff', mb: 4 }}>
              {organizationTypes[currentOrgType].subtitle}
            </Typography>
            
            <Grid container spacing={3}>
              {organizationTypes[currentOrgType].features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      height: '100%',
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
                    <CardContent sx={{ position: 'relative', zIndex: 2, p: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {feature.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#ffffff' }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
        
        {/* Carousel indicators */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 1 }}>
          {organizationTypes.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: currentOrgType === index ? 'primary.main' : 'grey.300',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onClick={() => setCurrentOrgType(index)}
            />
          ))}
        </Box>
      </Box>

      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Governance
      </Typography>
      <Typography variant="h6" sx={{ color: '#ffffff', mb: 4 }}>
        New ways to get clear on agreements and shared values.
      </Typography>
      
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12}>
          <Card
            sx={{
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
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                Democratic Governance & Resource Management
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
                Empower your community with comprehensive governance tools including polling features for decision-making, 
                stake-based resource investment systems, and robust treasury management for transparent financial oversight. 
                Create formal proposals, run polls, and manage member stakes based on contributions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Link href="/download-app" passHref>
        <Button variant="contained" color="primary" size="large">
          Register Your Organization
        </Button>
      </Link>
    </Container>
  )
}