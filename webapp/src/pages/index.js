import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Heading, Button } from 'rebass'
import { useAuth } from 'react-use-auth'

const IndexPage = () => {
    const { isAuthenticated, user, login } = useAuth()

  return  (
  <Layout>
    <SEO title="Markdown Landing Page" />
    <Heading color={'green'} fontSize={[5, 6, 7]}>Markdown Landing Page</Heading>
    <p c={'blue'}>Write a landing page for anything.</p>
    {isAuthenticated ? <p>Auth0 connection established. {user.name} </p> : null}
    <Button bg='highlight'>Get started NOW</Button>
  
    
  </Layout>
  )
}

export default IndexPage
