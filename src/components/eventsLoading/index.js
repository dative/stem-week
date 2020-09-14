import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarAlt,
  faClock,
  faTag,
  faBookReader,
} from '@fortawesome/free-solid-svg-icons'
import './style.scss'

class EventsLoading extends React.Component {
  render() {
    return (
      <div className="events-loading">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
}

export default EventsLoading
