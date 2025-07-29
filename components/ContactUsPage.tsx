import React from 'react'
import { Container, Typography, Grid, TextField, Button, Link } from '@mui/material'
import { Email, Phone, LocationOn } from '@mui/icons-material'
import { organization } from '../data/organization'

export default function ContactUsPage() {
  return (
    <Container sx={{ py: 12, minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 8 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 6 }}>
        We'd love to hear from you\! Whether you have a question, feedback, or need support, please reach out.
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Contact Information
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <Email sx={{ verticalAlign: 'middle', mr: 1 }} />
            Email:{' '}
            <Link href={`mailto:${organization.contact.email}`} color="secondary">
              {organization.contact.email}
            </Link>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <Phone sx={{ verticalAlign: 'middle', mr: 1 }} />
            Phone:{' '}
            <Link href={`tel:${organization.contact.phone}`} color="secondary">
              {organization.contact.phone}
            </Link>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <LocationOn sx={{ verticalAlign: 'middle', mr: 1 }} />
            Address: {organization.contact.address}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Send Us a Message
          </Typography>
          <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 3 }} />
          <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 3 }} />
          <TextField label="Message" variant="outlined" fullWidth multiline rows={6} sx={{ mb: 3 }} />
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
