import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <title>Animal Crossing Villagers by Popularity</title>

    <iframe src="https://public.tableau.com/views/ACNHVillagersbyPopularitywithfilters/AnimalCrossingVillagersbyPopularity?"
"https://public.tableau.com/views/VillagerInfoandoftotalcount/Sheet1?:showVizHome=no&:embed=true"
    
 width="100%" height="800" title="Animal Crossing Villagers by Popularity"></iframe>
  <div>
 <a href="https://forms.gle/S8Lj9zTLpNjLY7B7A"><button class="ui blue button">Click Here to Contribute</button></a>
 </div>
    
  </Layout>
)

export default IndexPage
