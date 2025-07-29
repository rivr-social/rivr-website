import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container, Typography, Button, Box, Grid, Card, CardContent, CardActions } from '@mui/material'
import { organization } from '../data/organization'
import HeroCarousel from './HeroCarousel'
import LogoCollection from './LogoCollection'
import FeaturesSection from './FeaturesSection'
import MembershipTypes from './MembershipTypes'
import TeamSection from './TeamSection'
import CommunityImpact from './CommunityImpact'
import TestimonialsCarousel from './TestimonialsCarousel'
import CallToAction from './CallToAction'

export default function LandingPage() {
  const router = useRouter()
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Hero #1 */}
      {/* Hero Content */}
      <Box className="metaHero" sx={{ 
        flexDirection: ['column', 'column', 'row'],
        position: 'relative',
        zIndex: 2,
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }}>
        <Box className="metaHeroText" sx={{ maxWidth: { xs: '100%', md: '32%' } }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            {organization.tagline}
          </Typography>
          <Typography variant="body1" sx={{ color: '#ffffff', mb: 4 }}>
            {organization.mission}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Link href="/download-app" passHref>
              <Button variant="contained" color="primary" size="large">
                Get in the Rivr.
              </Button>
            </Link>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large"
              onClick={() => router.push('/community#overview')}
            >
              Learn More
            </Button>
          </Box>
        </Box>
        
        {/* Hero Image on the right */}
        <Box sx={{ 
          maxWidth: { xs: '100%', md: '65%' },
          display: 'flex',
          justifyContent: 'center'
        }}>
          <img
            src="https://i.imgur.com/NTUkpYH.png"
            alt="Hero"
            style={{
              width: '100%',
              maxWidth: '800px',
              height: 'auto',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              opacity: 0.9
            }}
          />
        </Box>
      </Box>

      <Box sx={{ mt: 8 }}>
        <HeroCarousel />
      </Box>

      {/* About Us Section */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          We are Transforming how we Social Network.
        </Typography>
        <Typography variant="h6" sx={{ color: '#ffffff', mb: 4 }}>
          We know we can only be truly successful together. So, we've created the technology to support us all in our mutual thriving.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}>
          At the heart of Rivr. lies a profound belief: that the essence of our existence is not in competition but in collaboration. We envision a society where the circulation of skills, services, and gratitude forms the cornerstone of our interactions — facilitated through a platform that celebrates diversity, fosters inclusivity, encourages the free flow of generosity, honors maturation and the human journey. Our voting membership spans across explorers, players, event producers, service providers, product merchants, and organizations, each contributing to the rich tapestry of our community.This platform is more than an app; it's a movement towards creating a world where every interaction blooms with potential, every exchange strengthens the webs that bind us, and every connection enriches our capacity to give and receive love. We know the only way we will truly make a world more beautiful, is together. Will you play a part in crafting this poetic symphony of shared dreams and boundless possibilities? We hope to see you in the Rivr.
        </Typography>
        <Button 
          variant="outlined" 
          color="primary" 
          size="large"
          onClick={() => router.push('/about#manifesto')}
        >
          Learn more about the Vision.
        </Button>
      </Box>

      {/* Horizontal Row: Product/Feature Cards */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ color: '#ffffff', mb: 1 }}>
          A technology that connects us in new and remembered ways.
        </Typography>
        <Typography variant="body2" sx={{ color: '#ffffff', mb: 2 }}>
          The new Rivr. social app is for a more beautifully thriving future. [the app]
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          Discover Rivr.'s Essential Features
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { id: 5, title: 'Share', text: 'find what you need, and share what you have', img: 'https://i.imgur.com/LVkeZfn.jpg' },
            { id: 1, title: 'Groups', text: 'Join local groups doing things you care about', img: 'https://i.imgur.com/yQcLZPD.jpg' },
            { id: 2, title: 'Events', text: 'Host or attend local events', img: 'https://i.imgur.com/z7BDrir.jpg' },
            { id: 3, title: 'Marketplace', text: 'Buy & sell products or services locally', img: 'https://i.imgur.com/4WIZwKt.jpg' },
            { id: 4,
              title: 'Community',
              text: (
                <span
                  style={{
                    background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradientBG 5s ease infinite',
                    display: 'inline-block',
                    padding: '0.2em 0'
                  }}
                >
                  Manage tasks, make decisions, and earn stake in collaborative projects
                </span>
              ),
              img: 'https://i.imgur.com/085BFzJ.jpg'
            }
          ].map((item) => (
            <Box key={item.id}>
              <Card
                sx={{
                  width: 280,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CardContent>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: '100%',
                      borderRadius: 8,
                      marginBottom: 8,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#ffffff',
                      fontWeight: 'bold',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal',
                    }}
                  >
                    {item.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="small"
                    onClick={() => {
                      // Map feature titles to appropriate overview pages with anchor links
                      const pageMap: Record<string, string> = {
                        'Share': '/features#sellers',
                        'Groups': '/community#overview',
                        'Events': '/community#overview',
                        'Marketplace': '/features#sellers',
                        'Community': '/community#overview'
                      };
                      
                      const destination = pageMap[item.title] || '/features#overview';
                      router.push(destination);
                    }}
                  >
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      <LogoCollection />
      <FeaturesSection />
      <MembershipTypes />
      <TeamSection />
      <CommunityImpact />
      <TestimonialsCarousel />
      <CallToAction />
    </Container>
  )
}