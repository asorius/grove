import React from "react"
import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GKEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div
        style={{
          position: `absolute`,
          top: 0,
          left: 0,
          height: `100%`,
          width: `100%`,
          zIndex: `0`,
        }}
      />
    ),
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: 52.9, lng: -1.6 }}
    options={{
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
    }}
  >
    {props.isMarkerShown && (
      <>
        <Marker position={{ lat: 52.9566732, lng: -1.1568329 }} />
        <Marker position={{ lat: 52.900269, lng: -1.858195 }} />
      </>
    )}
  </GoogleMap>
))

export default MyMapComponent
