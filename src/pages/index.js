import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <title>Animal Crossing Villagers by Popularity</title>

<span>
<h2 class="ui header">
  <img src="https://i.imgur.com/eGqetql.png">
  <div class="content">
  Welcome to acnh.pro! 
    <div class="sub header">This website is designed to show how frequent all of the villagers are on player islands. All data is crowd generated and you can help by filling out the poll and by telling your friends.</div>
  </div>
</h2>
</span>

Hover over a villager to see more info about them!
<iframe src="https://public.tableau.com/views/VillagerInfoandoftotalcount/Sheet1?:showVizHome=no&:embed=true"
    
 width="100%" height="800" title="Animal Crossing Villagers by Popularity"></iframe>
  <div>
 <a href="https://forms.gle/S8Lj9zTLpNjLY7B7A"><button class="ui blue button">Click Here to Contribute</button></a>
 </div>
    
  </Layout>
)

export default IndexPage
