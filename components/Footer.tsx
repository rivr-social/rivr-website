import React from 'react'
import Link from 'next/link'
import { Box, Container, Grid, Typography, List, ListItem, ListItemText, Divider, IconButton, TextField, Button } from '@mui/material'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'
import { organization } from '../data/organization'

export default function Footer() {
  return (
    <Box py={6} sx={{ backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 4, color: '#333333' }}>
              {organization.name}
            </Typography>
            <List>
              <ListItem disableGutters>
                <Link href="/" style={{ textDecoration: 'none', color: '#333333' }}>
                  <ListItemText primary="Home" />
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link href="/manifesto" style={{ textDecoration: 'none', color: '#333333' }}>
                  <ListItemText primary="About" />
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link href="/features" style={{ textDecoration: 'none', color: '#333333' }}>
                  <ListItemText primary="Features" />
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link href="/impact-stories" style={{ textDecoration: 'none', color: '#333333' }}>
                  <ListItemText primary="Community" />
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link href="/investors" style={{ textDecoration: 'none', color: '#333333' }}>
                  <ListItemText primary="Investors" />
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link href="/contact-us" style={{ textDecoration: 'none', color: '#333333' }}>
                  <ListItemText primary="Contact Us" />
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link href="/faq" style={{ textDecoration: 'none', color: '#333333' }}>
                  <ListItemText primary="FAQ" />
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 4, color: '#333333' }}>
              Follow Us
            </Typography>
            <Typography variant="body1" sx={{ color: '#333333', mb: 4 }}>
              Join the conversation.
            </Typography>
            <Box display="flex" justifyContent="flex-start">
              <IconButton href="#" color="primary" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton href="#" color="primary" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton href="#" color="primary" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton href="#" color="primary" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 4, color: '#333333' }}>
              Newsletter Signup
            </Typography>
            <Typography variant="body1" sx={{ color: '#333333', mb: 4 }}>
              Get the Latest Stories and Updates — Sign Up Here.
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: '#6d4c41' } }}
              InputProps={{ style: { color: '#333333', backgroundColor: '#ffffff' } }}
            />
            <Button variant="contained" color="primary" fullWidth>
              Subscribe
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ my: 6, backgroundColor: '#e0e0e0' }} />
        <Box textAlign="center">
          <Typography variant="body2" sx={{ color: '#333333' }}>
            © 2024 {organization.name}. All rights reserved. |{' '}
            <Link href="/terms-of-service" style={{ color: '#333333' }}>
              Terms of Service
            </Link>{' '}
            |{' '}
            <Link href="/privacy-policy" style={{ color: '#333333' }}>
              Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}