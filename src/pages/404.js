import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <img src="https://i.imgur.com/JxKhsHy.png"></img>
    <p>You seem to have taken a wrong turn...</p>
  </Layout>
)

export default NotFoundPage
