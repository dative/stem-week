import React from 'react'
import './style.scss'

class EventsViewer extends React.Component {
  render() {
    return (
      <div className="events-viewer">
        <nav className="events-viewer--nav">
          <button>List View</button>
          <button>Map View</button>
        </nav>
      </div>
    )
  }
}

export default EventsViewer
