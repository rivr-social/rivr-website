import React from 'react'
import { Container, Typography, Box, Button } from '@mui/material'

export default function ManifestoPage() {
  return (
    <Container sx={{ py: 12, minHeight: '100vh' }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 4 }}>
        About Rivr
      </Typography>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          A little about us….
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          The birthing of the Rivr. social app (formally known as ONE | Boulder) emerged from the immediate needs of the community in 2020. The vision, from the start, has been to create a place and a way for community to mutually support one another, to share offerings, events, and coordinate our gifts and resources, to weave together a beautiful heart-connected collective, of the many wise and skillful members of this local community and local communities around the world. Our ethic has been to build something that is the crystallization of a collective vision, beyond any one of us, and to include all contributors in the process. This is the vision of a more beautiful, interconnected, thriving world. A world where people aren't isolated, but feel their strong, inherent belonging. Where all lost souls find shelter, safety, and connection. Where our souls' purpose can be authentically embodied in relation with the people and the place where we live. A world where we can weave our efforts together on the local land and discover what gifts we may raise. To bring about a more vibrant world of care and kindness, and deep diverse connection with all the sources of nourishment that quench our thirsty modern hearts. We are here on purpose, for the purpose of mutual thriving. We are here so we can collaborate more efficiently as bioregions, all over the world. Everyone has a part to play.
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          Our Vision:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Our Vision is to actively connect individuals who can govern themselves cooperatively, communicate & coordinate actions effectively, and provision abundantly. We take radical responsibility to thrive together locally and regenerate life everywhere. For the last several years we've been laying the foundations of an alliance to support mutual thriving at scale.
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          Our Mission:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Our Mission is to offer access to resources through expansive experiences that support individuals to become more effective community leaders and stewards of life. We are establishing a resilient community of practice here in Boulder, one that meaningfully adapts to systemic change and bridges differing perspectives to bring people together and meet our common needs locally. Even more important than WHAT we do is HOW we do it, so we use techniques inspired by decades of authentic relating, intentional community building, and regenerative culture to tend our relations.
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          Who We Are:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          The Rivr. social network is a growing collective devoted to creating a thriving local region where individuals, businesses and communities have access to the essential resources needed to activate their soul purpose.
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          Where We're Going:
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Boulder was, and becomes again, our first living prototype of an even greater global vision of a network of communities, uniquely their own, yet connected to a similar mission: the activation of individual and regional soul purpose. This vision has now become Rivr. What we learn here in Boulder is now moving to communities and eco-villages in bioregions based on watersheds in the US and all around the world.
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          The integration of modern and traditional culture building.
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
          In with the old, in with the new.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          We are a tribal species, a social species. We have only gotten this far in humanity because (for most of our time on earth) we knew the importance of sharing resources and stewarding relationship the land. We had to, to survive. Our modern times are different though. We have resources our ancestors, our grandparents and great-grandparents, didn't. We don't need to throw the tech down to return a more original way of being, instead, we get to utilize technology (and the many chapters of lessons from our collective maturation journey) to make collaboration the most efficient it's ever been! The foundation of our mission has always been to connect people with the things humans really need. The true nourishing things. Being there for people during the hard times, not only the best of times. We recognize true community is built in our day to day relationships. The kinds of relationships that are nourished by, not just dancing together, but are also doing the nitty and gritty parts of life together, too. We want to imprint this platform with the engram of a new sense of cultural interconnectedness. We want to showcase the powerful existing multi-cultures every where they exist, and where they may have been lost. We want to hold space for the raising of novel cultures with depth and coherence, connected with the earth, and the cycle of life; and in relationship to every source of human nourishment like food, family, friends, and a sense of purpose and belonging. We want to be in a shared context where the world makes sense, where we hold roles we're proud of, where we share the way, and feel welcomed and at home in the world.
        </Typography>
        <Button variant="outlined" color="primary" size="large" sx={{ mb: 6 }}>
          Explore Rivr Memberships
        </Button>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          Ways to Get Involved
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
          There are many ways to start to play with us, with more ways always being added!
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 6 }}>
          <Button variant="contained" color="primary">Download App</Button>
          <Button variant="outlined">View Events Calendar</Button>
          <Button variant="outlined">Become an Event Producer or Service Provider</Button>
          <Button variant="outlined">Follow Us on Facebook & Instagram</Button>
          <Button variant="outlined">Attend a Training</Button>
          <Button variant="outlined">Subscribe to Email List</Button>
        </Box>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          Our History
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          A humble, local beginning for a beautiful, global future.
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
          What now is Rivr, began as ONE.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          These past few years we have worked with this app to weave networks of community closer together, now we are expanding. We are on the brink of something truly revolutionary, and your role in this pivotal point in this journey is crucial. As the world around us revolves and evolves, the Rivr. social app does too — transforming into a vibrant social coordination platform that will empower us to deepen our engagement in the community we cherish. A reflection of the progression of our growth and maturation, in this co-creation. This upgrade will, yes, bless us with a new look, but it is so much more than that.
        </Typography>
        
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Boulder is the first branch of many to come in the Rivr. social network.
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
          Yes, we are growing.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          And with the expansion, we are also enhancing our collective ability to manage projects, events, and organizations, and broadening our cultural horizon to embrace more family-oriented events. We are here for integration and collective maturation, and the diversity of experiences and opportunities that are necessary for a whole and well ecosystem of humans to grow and thrive in body, heart and soul (individually and collectively.)
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          Nurturing the Tree of Community in the Rising Tide
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          In the storm-tossed sea of our contemporary mythic flood, a tree rises, its heartwood beating waves of peace into the surrounding ocean, defying the surging tides. This is not just any tree, but a beacon of hope, resilience, and interconnectedness.
        </Typography>
      </Box>
    </Container>
  )
}