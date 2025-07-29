import React from 'react'
import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material'
import { groups } from '../data/groups'
import { users } from '../data/users'

export default function TeamPage() {
  return (
    <Container sx={{ py: 12, minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 8, textAlign: 'center' }}>
        Meet the Team
      </Typography>
      <Grid container spacing={6}>
        {groups.map((group, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4 }}>
              {group.name}
            </Typography>
            <Grid container spacing={4}>
              {group.members.map((memberId) => {
                const member = users.find((user) => user.id === memberId)
                if (!member) return null
                return (
                  <Grid item xs={12} key={member.id}>
                    <Card sx={{ cursor: 'pointer' }}>
                      <CardContent>
                        <Avatar
                          src={member.image}
                          alt={member.name}
                          sx={{ width: 120, height: 120, mx: 'auto', mb: 4 }}
                        />
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                          {member.name === 'Open Position'
                            ? `Open Position: ${member.role}`
                            : member.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ textAlign: 'center', color: 'text.secondary', mb: 2 }}
                        >
                          {member.name === 'Open Position' ? '' : member.role}
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'center' }}>
                          {member.bio}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}