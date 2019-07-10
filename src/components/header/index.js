import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Header extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <header className="main-header">
        <Link className="text-center" to="/">
          <h1 className="navbar-brand mb-0">{title}</h1>
        </Link>
      </header>
    )
  }
}

export default Header
