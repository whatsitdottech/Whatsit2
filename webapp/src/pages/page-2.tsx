// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <h1>This is the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
  
    <Link to="/">Return to the homepage</Link>
    <p></p>
  </Layout>
)

export default SecondPage
