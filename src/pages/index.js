import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Services from "../components/services"
import Contacts from "../components/contacts"
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
        style={{ minHeight: "100%" }}
        id="Home"
      ></Header>
      <Services></Services>
      <Contacts></Contacts>
    </Layout>
  )
}

export default IndexPage
