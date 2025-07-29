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
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {post.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  {post.excerpt}
                </Typography>
                <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: 8 }} />
              </CardContent>
              <CardActions>
                <Button variant="text" color="primary">Read More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}