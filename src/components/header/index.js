import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Header extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <header className="main-header">
        <div className="container">
          <div className="row">
            <div className="col col-lg-8">
              <Link to="/">
                <h1>
                  Cape Cod <strong>STEM Week</strong>
                </h1>
              </Link>
              <time dateTime="2020-10-19/2020-10-23">OCT 19-23, 2020</time>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
