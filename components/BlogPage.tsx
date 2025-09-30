import React from 'react'
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material'
import { blogPosts } from '../data/blog'

export default function BlogPage() {
  return (
    <Container sx={{ py: 12, minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 8 }}>
        Blog
      </Typography>
      <Grid container spacing={6}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{
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
            }}>
              <CardContent sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {post.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  {post.excerpt}
                </Typography>
                <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: 8 }} />
              </CardContent>
              <CardActions sx={{ position: 'relative', zIndex: 2 }}>
                <Button variant="text" color="primary">Read More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}