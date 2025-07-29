import React from 'react'
import Link from 'next/link'
import { Container, Typography, Button, Box } from '@mui/material'

export default function LocalMembersPage() {
  return (
    <Container sx={{ py: 4, minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Your gateway to a thriving, connected community.
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
        As a member, you're not just part of a platform—you're part of a movement to empower local relationships and resources.
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Detailed User Profiles
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Create a rich profile showcasing your bio, skills, and interests. Connect with others based on shared passions and expertise within your local chapter.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Interactive Social Feed
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Engage with posts, events, and group updates. Use the unique "Thank" feature to send appreciation points, money, or skill vouchers to fellow members.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Personalized Calendar
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Your schedule, unified. Automatically track events you're attending, job shifts you've claimed, and services you've booked, all in one place with month, week, and day views.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Digital Wallet & Reputation
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8 }}>
          Manage your personal and group funds in your Wallet. Earn points and skill-based Badges to build your reputation and unlock new opportunities within the community.
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Events & Calendar
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
          Get involved in local movements, explore local events, bring you life energy and attention towards something that matters.
        </Typography>
        
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Discover & Connect
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Explore a vibrant calendar of local events, from workshops and classes to community gatherings and festivals. Find activities that match your interests and connect with others who share your passions.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Stay Organized
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Easily manage your schedule by adding events to your personalized calendar, receiving reminders, and staying up-to-date on the latest happenings in your community.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Create & Promote
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8 }}>
          Planning an event? Utilize Rivr's tools to create event listings, manage registrations, and promote your event to a wider audience within the community.
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Resource Sharing: Requests & Offers
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
          Together we have everything, and anything is possible.
        </Typography>
        
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Share What You Have
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Offer your skills, resources, and expertise to others in the community. Whether it's lending a helping hand, sharing tools or equipment, or offering professional services, contribute to a culture of mutual support and collaboration.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Get What You Need
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Request specific skills, resources, or assistance from your local network. Connect with individuals who can provide the support you need to complete projects, achieve your goals, or simply navigate everyday challenges.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Build Community
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8 }}>
          The act of sharing and requesting fosters a sense of community and interconnectedness, reminding us that we are all part of a larger support system.
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Community Profiles
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
          Witness the living social ecology of your local area.
        </Typography>
        
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Connect with Your Neighbors
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Explore profiles of fellow community members, discover shared interests, share your astrology and build meaningful connections.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Showcase Your Skills
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Create a profile that highlights your unique talents, skills, and experiences. Let others know what you have to offer and how you can contribute to the community.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Find Local Experts
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8 }}>
          Search for individuals with specific skills or expertise that you need for projects or tasks.
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Interactive Map
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
          Get a visual view of what is happening near you.
        </Typography>
        
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Explore Your Surroundings
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Discover local businesses, services, events, and community resources through an interactive map.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Navigate with Ease
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Find your way around your community and locate points of interest with ease.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Visualize Connections
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8 }}>
          See how you're connected to others in your community and explore the network of resources and opportunities available to you.
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          In-app Messaging
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
          Keep communications all in one place
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
          • DMs and message groups
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
          • Link message groups to organizations
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
          • Sort your messages and groups for easy finding
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8 }}>
          • Pin your favorites to the top so you'll never lose them
        </Typography>
      </Box>

      <Link href="/download-app" passHref>
        <Button variant="contained" color="primary" size="large">
          Join Now
        </Button>
      </Link>
    </Container>
  )
}
