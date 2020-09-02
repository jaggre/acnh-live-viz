import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <img src="blob:https://imgur.com/7ca1b92a-6909-46cb-bd30-8ad3eb8c9860"></img>
    <p>You seem to have taken a wrong turn...</p>
  </Layout>
)

export default NotFoundPage
