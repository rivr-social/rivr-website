import React from 'react'
import Link from 'next/link'
import { Container, Typography, Button, Box, Grid, Card, CardContent } from '@mui/material'

export default function SellersPage() {
  return (
    <Container sx={{ py: 4, minHeight: '100vh' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
        Sellers
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Ready to sell locally?<br />
        Start Trading.
      </Typography>
      <Typography variant="h6" sx={{ color: '#ffffff', mb: 4 }}>
        Turn your skills and products into local success stories.
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, mt: 6 }}>
        Marketplace Features
      </Typography>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {[
          {
            title: 'Flexible Marketplace',
            description: 'Create listings for physical products or professional services. Choose how you want to transact: Sale, Rent, Borrow, or Gift, supporting both commerce and mutual aid.'
          },
          {
            title: 'Offerings & Vouchers',
            description: 'Define your skills and resources as Offerings on your profile. Package them into redeemable Vouchers with a community-rated value, perfect for the gift economy.'
          },
          {
            title: 'Reach Local Customers',
            description: 'Your listings appear in the main feed, explore page, and relevant group marketplaces, maximizing visibility within your community.'
          },
          {
            title: 'Intelligent Matching',
            description: 'The platform automatically finds potential Matches between your "Offers" and other members\' "Requests," creating effortless connections for exchange.'
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

      <Link href="/download-app" passHref>
        <Button variant="contained" color="primary" size="large">
          Open Your Shop
        </Button>
      </Link>
    </Container>
  )
}