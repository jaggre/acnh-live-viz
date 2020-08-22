import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <title>Animal Crossing Villagers by Popularity</title>
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>
      
      <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Welcome to acnh.pro! </h1>
    <p class="lead">This website is designed to show how frequent all of the villagers are on people's islands.</p><p class="lead"> All data is community-generated and you can help by filling out the poll and by telling your friends.</p>
  </div>
</div>

Hover over a villager to see more info about them!
<iframe src="https://public.tableau.com/views/VillagerInfoandoftotalcount/Sheet1?:showVizHome=no&:embed=true"
    
 width="100%" height="800" title="Animal Crossing Villagers by Popularity"></iframe>
  <div>
 <a href="https://forms.gle/S8Lj9zTLpNjLY7B7A"><button class="ui blue button">Click Here to Contribute</button></a>
 </div>
    
  </Layout>
)

export default IndexPage
