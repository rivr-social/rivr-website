import React from 'react'
import Link from 'next/link'
import { Container, Typography, Button, Box } from '@mui/material'

export default function SellersPage() {
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
          Flexible Marketplace
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Create listings for physical products or professional services. Choose how you want to transact: Sale, Rent, Borrow, or Gift, supporting both commerce and mutual aid.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Offerings & Vouchers
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Define your skills and resources as Offerings on your profile. Package them into redeemable Vouchers with a community-rated value, perfect for the gift economy.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Reach Local Customers
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Your listings appear in the main feed, explore page, and relevant group marketplaces, maximizing visibility within your community.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Intelligent Matching
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8 }}>
          The platform automatically finds potential Matches between your "Offers" and other members' "Requests," creating effortless connections for exchange.
        </Typography>
      </Box>

      <Link href="/download-app" passHref>
        <Button variant="contained" color="primary" size="large">
          Open Your Shop
        </Button>
      </Link>
    </Container>
  )
}