import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="about" />
    <h1>About</h1>
    <p>acnh.pro started out with the question “What villagers are the most common on player’s islands?”. To answer this, we made a poll for New Horizons players to fill out asking them about their current villagers. Then, we displayed the results in a fun and easy to view format that lets you filter by species, personality, and live count of poll responses. 
</p>
<p>Since the initial poll, acnh.pro has grown to be a helpful resource for New Horizons players trying to view data mine information in an easy to access format. 
</p>
<p>We’d like to thank everyone who responded to the poll and helped us create the data. Results are updated frequently so tell your friends to answer the poll and keep enjoying the island life!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
