import React from 'react'
import Link from 'next/link'
import { Container, Typography, Button, Box, Card, CardContent } from '@mui/material'

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
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Empower your mission with the tools and support of a cooperative network.
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
        Rivr helps organizations thrive by connecting them to their communities.
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Nesting and Latticing
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Organize your community with a flexible structure. Create top-level Rings, which contain smaller Families, or build standalone Groups and Orgs with customizable features.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Collaborative Projects & Jobs
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Launch projects with clear goals. Break down work into Jobs and specific Tasks. Members can claim tasks and track their time with a built-in Work Timer.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Shared Economy Tools
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Manage a collective Treasury, a pool of Mutual Assets (like tools or vehicles) for members to book, and a Voucher Pool for exchanging services, all at the group, family, or ring level.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Decentralized Governance
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8 }}>
          Make decisions together. Create formal Proposals for voting, run informal Polls, and manage member Stakes (profit shares) based on their contributions.
        </Typography>
      </Box>

      {/* Organization Types Carousel */}
      <Box sx={{ mb: 6 }}>
        <Card sx={{ minHeight: '400px', position: 'relative', overflow: 'hidden' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              {organizationTypes[currentOrgType].title}
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
              {organizationTypes[currentOrgType].subtitle}
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 2 }}>
              {organizationTypes[currentOrgType].features.map((feature, index) => (
                <Box key={index} sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {feature.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {feature.description}
                  </Typography>
                </Box>
              ))}
            </Box>
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

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Governance
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
          New ways to get clear on agreements and shared values.
        </Typography>
        
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Decision-making
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Polling feature
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Stake
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Resource investment
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Treasury
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8 }}>
          Financial management
        </Typography>
      </Box>

      <Link href="/download-app" passHref>
        <Button variant="contained" color="primary" size="large">
          Register Your Organization
        </Button>
      </Link>
    </Container>
  )
}