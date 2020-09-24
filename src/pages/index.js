import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Services from "../components/services"
import Contacts from "../components/contacts"
import Lettings from "../components/lettings"
const IndexPage = ({ title, subTitle, description }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
          description
          subTitle
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Header
        siteTitle={data.site.siteMetadata.title}
        subTitle={data.site.siteMetadata.subTitle}
        description={data.site.siteMetadata.description}
        id="Home"
      ></Header>
      <Services></Services>
      <Lettings></Lettings>
      <Contacts></Contacts>
    </Layout>
  )
}

export default IndexPage
