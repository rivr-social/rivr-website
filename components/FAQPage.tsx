import React from 'react'
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

export default function FAQPage() {
  const faqs = [
    {
      question: 'What is ONE Local?',
      answer: 'ONE Local is a platform that empowers communities by connecting local members, event hosts, sellers, and organizations in one place.',
    },
    {
      question: 'How do I join as a member?',
      answer: 'Simply download our app, create a free account, and start connecting with your local community.',
    },
    {
      question: 'How do I create an event?',
      answer: 'Upgrade to an Event Host membership, and you can start creating and managing events directly from your dashboard.',
    }
  ]

  return (
    <Container sx={{ py: 12, minHeight: '100vh' }}>
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 8 }}>
        Frequently Asked Questions
      </Typography>
      <Box mt={4}>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  )
}
