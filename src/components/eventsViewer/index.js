import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faMap } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

class EventsViewer extends React.Component {
  render() {
    return (
      <div className="events-viewer">
        <nav className="events-viewer--nav">
          <button className="active">
            <FontAwesomeIcon icon={faList} /> List View
          </button>
          <button>
            <FontAwesomeIcon icon={faMap} /> Map View
          </button>
        </nav>
      </div>
    )
  }
}

export default EventsViewer
