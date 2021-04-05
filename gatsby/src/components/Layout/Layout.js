import React from "react"
import { Container } from '@chakra-ui/react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
    return (
     <Container>
      <Header />
        {children}
       <Footer />
    </Container>
    )
}

export default Layout
