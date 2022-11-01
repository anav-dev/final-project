import React, { useState } from "react";
import MapStyle from "./MapApi.css";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

/*  LoadScript: Loads the Google Maps API script
    GoogleMap: The map component inside which all other components render */

/* sources: https://www.npmjs.com/package/@react-google-maps/api
            https://react-google-maps-api-docs.netlify.app/
            https://developers.google.com/maps/documentation/javascript/infowindows
            https://react-google-maps-api-docs.netlify.app/#!/InfoWindow

troubleshooting: Google Maps JavaScript API warning: NoApiKeys 
https://developers.google.com/maps/documentation/javascript/error-messages#no-api-keys
utm_source=maps_js&utm_medium=degraded&utm_campaign=keyless#api-key-and-billing-errors

troubleshooting: Google message "This page can't load Google maps correctly" +
                 Uncaught ReferenceError: google is not defined
https://developers.google.com/maps/documentation/javascript/error-messages?
https://react-google-maps-api-docs.netlify.app/
*/

const mapStyle = {
  height: "500px",
  width: "370",
};

const center = {
  lat: 53.3498006, //Dublin geo coordinates
  lng: -6.2602964,
};
const positionWrapper = {
  lat: 53.349596, //Photographer location
  lng: -6.2487626,
};
const MY_KEY_API = "AIzaSyB-sKZZi0UqtXsk7QT4cEH-1WhpFYrGbFg";

function MapApi() {
  const [isShown, setIsShown] = useState(false);

  function handleMarker() {
    console.log("handle marker clicked");
    setIsShown(true);
  }

  return (
    <>
      <div className="map-title">
        {" "}
        Click on the map marker to know photographer's{" "}
      </div>
      <LoadScript googleMapsApiKey={MY_KEY_API}>
        <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={13}>
          <Marker position={positionWrapper} onClick={handleMarker}>
            {isShown && (
              <InfoWindow>
                <div>
                  <span className="marker-info">
                    <b>Photoghaper location details: </b>
                    <br /> Mayor Street Lower, <br />
                    Dublin 1 <br />
                    http://www.ncirl.ie/{" "}
                  </span>
                </div>
              </InfoWindow>
            )}{" "}
          </Marker>
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default MapApi;
