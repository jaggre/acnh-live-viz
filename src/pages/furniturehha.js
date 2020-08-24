import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';



const FurnitureHHAPage = () => (
  <Layout>
    <SEO title="Animal Crossing Villagers by Popularity" />
      <title>Animal Crossing Villagers by Popularity</title>
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>
<link rel="stylesheet" href="styles/global.css"></link>
      
      <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Furniture by HHA Points</h1>
    <p class="lead">This visualization shows the HHA Points bonus of a given furniture item in Animal Crossing New Leaf</p><p class="lead"><a href="https://tinyurl.com/acnh-sheet"> Data Source </a></p>
  </div>
</div>




Hover over a furniture item to see more info about it!
<iframe src="https://public.tableau.com/profile/jaggre#!/vizhome/AnimalCrossingFurniturebyHHAPoints/AnimalCrossingFurnitureItemsbyHHAPoints?:showVizHome=no&:embed=true"



    
 width="100%" height="800" title="Animal Crossing Villagers by Popularity"></iframe>

 
 </Layout>
)

 export default FurnitureHHAPage