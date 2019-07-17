import React from 'react'
import './style.scss'
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <a
        className="btn btn-danger btn-block"
        href="https://capecodstemnetwork.org/submit-an-event"
        target="_blank"
        rel="noreferrer"
      >
        Add Your Event!
      </a>

      <p>BROUGHT TO YOU BY:</p>

      <a href="https://capecodstemnetwork.org" target="_blank" rel="noreferrer">
        <img src="/img/stem-logo.svg" alt="Cape Cod STEM Network Logo" />
      </a>

      <a href="https://www.massstemweek.org/" target="_blank" rel="noreferrer">
        <img src="/img/mass-logo.svg" alt="Mass STEM Week Logo" />
      </a>
    </aside>
  )
}

export default Sidebar
