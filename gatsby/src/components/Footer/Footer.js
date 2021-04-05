import React from 'react'
import { Container } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Container mt="4">
       &copy; {new Date().getFullYear()} Daniel A. Boateng
    </Container>
  )
}
