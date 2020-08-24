import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"



const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'rgb(124, 201, 195)',
      marginBottom: `1.45rem`,
    }}
  >
    <link rel="stylesheet" href="styles/global.css"></link>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
 

  <nav class="navbar  navbar-dark bg-acnh">
<a class="navbar-brand" href="/"><img src='({https://i.imgur.com/yQKnH9C.png})'></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/popularity">Villagers by Popularity</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/furniturehha">Furniture by HHA Points</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="https://forms.gle/S8Lj9zTLpNjLY7B7A">Submit Your Villagers</a>
      </li>
    </ul>
  </div>
</nav>


<div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          src="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    
  </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
