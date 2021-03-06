import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>Aswin Sanakan</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
