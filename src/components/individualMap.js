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
    defaultZoom={15}
    defaultCenter={{ lat: props.coords.lat, lng: props.coords.lng }}
  >
    {props.coords && (
      <>
        <Marker position={{ lat: props.coords.lat, lng: props.coords.lng }} />
      </>
    )}
  </GoogleMap>
))

export default MyMapComponent
