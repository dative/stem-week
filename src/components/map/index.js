import React from 'react'
import { compose } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

import './style.scss'

const Map = compose(
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap defaultZoom={9} center={{ lat: 41.7966103, lng: -70.588341 }}>
      {props.events.map((event, index) => {
        const onClick = props.onClick.bind(this, event)
        return (
          <Marker
            key={`marker-${index}`}
            position={event.node.geolocation}
            onClick={onClick}
          ></Marker>
        )
      })}
    </GoogleMap>
  )
})

export default Map
