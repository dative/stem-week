import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faMap, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

import EventListItem from '../eventListItem'
import Map from '../map'

class EventsViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedEvent: false,
    }
  }

  render() {
    const { events } = this.props
    return (
      <div className="events-viewer">
        <div className="tab-content" id="myTabContent">
          <div className="events-viewer--event-list" role="tabpanel">
            {events &&
              events.length > 0 &&
              events.map((item, index) => (
                <EventListItem key={`eventItem-${index}`} {...item} />
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default EventsViewer
