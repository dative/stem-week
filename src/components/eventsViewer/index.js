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
      activeTab: 'list',
      selectedEvent: false,
    }
  }

  onTabClick = event => {
    event.preventDefault()
    this.setState({
      activeTab: event.currentTarget.value,
      selectedEvent: false,
    })
  }

  onMarkerClick = (marker, event) => {
    this.setState({ selectedEvent: marker })
  }

  onMapClose = event => {
    this.setState({ selectedEvent: false })
  }

  render() {
    const { events } = this.props
    return (
      <div className="events-viewer">
        <nav className="events-viewer--nav" id="viewerTab" role="tablist">
          <button
            id="list-tab"
            className={`${this.state.activeTab === 'list' && 'active'}`}
            aria-controls="list"
            aria-selected={this.state.activeTab === 'list'}
            onClick={this.onTabClick}
            value="list"
          >
            <FontAwesomeIcon icon={faList} /> List View
          </button>
          <button
            id="map-tab"
            className={`${this.state.activeTab === 'map' && 'active'}`}
            aria-controls="map"
            aria-selected={this.state.activeTab === 'map'}
            onClick={this.onTabClick}
            value="map"
          >
            <FontAwesomeIcon icon={faMap} /> Map View
          </button>
        </nav>
        <div className="tab-content" id="myTabContent">
          {this.state.activeTab === 'list' && (
            <div
              className="events-viewer--event-list"
              role="tabpanel"
              aria-labelledby="list-tab"
            >
              {events &&
                events.length > 0 &&
                events.map((item, index) => (
                  <EventListItem key={`eventItem-${index}`} {...item.node} />
                ))}
            </div>
          )}

          {this.state.activeTab === 'map' && (
            <div role="tabpanel" aria-labelledby="map-tab">
              <Map
                selectedEvent={this.state.selectedEvent}
                onClick={this.onMarkerClick}
                events={events}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDQGsNp_VBLnfrcgiBuji1D65R6G2565J8`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={
                  <div
                    style={{
                      height: `${
                        this.state.selectedEvent === false ? '600px' : '200px'
                      }`,
                      width: `100%`,
                      transition: `height 0.3s ease-out`,
                    }}
                  />
                }
                mapElement={<div style={{ height: `100%` }} />}
              />
              {this.state.selectedEvent !== false && (
                <div className="events-viewer--event-list">
                  <h2 className="events-viewer--event-list--heading">
                    Events at {this.state.selectedEvent.node.eventWhere}
                    <button onClick={this.onMapClose}>
                      <FontAwesomeIcon icon={faTimesCircle} /> close
                    </button>
                  </h2>
                  {events &&
                    events.length > 0 &&
                    events
                      .filter(
                        item =>
                          item.node.geolocation ===
                          this.state.selectedEvent.node.geolocation
                      )
                      .map((item, index) => (
                        <EventListItem
                          key={`eventItem-${index}`}
                          {...item.node}
                        />
                      ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EventsViewer
