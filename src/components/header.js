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
    <div class="ui secondary  menu">
  <a class="active item">
    Home
  </a>
  <a href="https://forms.gle/S8Lj9zTLpNjLY7B7A">
    Submit Your Villagers
  </a>
</div>

<div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
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
