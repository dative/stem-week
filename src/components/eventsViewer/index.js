import React from 'react'
import './style.scss'

import EventListItem from '../eventListItem'

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
            {events && events.length > 0 ? (
              events.map((item, index) => (
                <EventListItem key={`eventItem-${index}`} {...item} />
              ))
            ) : (
              <div className="alert-box">
                <div className="alert alert-primary text-center" role="alert">
                  No events yet. If you want to post your event for the STEM
                  Week,{' '}
                  <a
                    href="https://capecodstemnetwork.org/submit-an-event"
                    target="_blank"
                  >
                    click here
                  </a>
                  .
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EventsViewer
