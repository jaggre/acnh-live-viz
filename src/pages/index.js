import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
<link rel="stylesheet" href="styles/global.css"></link>
      
      <div class="jumbotron jumbotron-fluid jumbotron-acnh">
  <div class="container">
    <h1 class="display-4">Welcome to acnh.pro! </h1>
    <p class="lead">This project is designed to make the information found by Animal Crossing Dataminers more accessible.</p><p class="lead"> All data on popularity is community-generated and you can help by filling out the poll and by telling your friends.</p>
    <p class="lead">This is a test of the paragraph function</p>
  </div>
</div>
    
  </Layout>
)

export default IndexPage
