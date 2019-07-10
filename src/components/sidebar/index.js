import React from 'react'
import Img from 'gatsby-image'
const Sidebar = ({ data }) => {
  console.log(data)
  return (
    <div>
      <a href="https://capecodstemnetwork.org/submit-an-event">
        Add Your Event!
      </a>

      <p>BROUGHT TO YOU BY:</p>

      {/* <Img fixed={profile} /> */}
    </div>
  )
}

export default Sidebar
