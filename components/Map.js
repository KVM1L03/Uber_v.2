import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import {GOOGLE_MAPS_APIKEY} from '@env'


const Map = () => {
  const origin=useSelector(selectOrigin);
  const destination=useSelector(selectDestination);
  const mapRef=useRef(null);
  const dispatch=useDispatch()
  
  const zoomToMarkers = () => {
    const zoomTimer = setInterval(() => {
      mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      });
      clearInterval(zoomTimer);
    }, 512);
  };

  useEffect(() => {
    zoomToMarkers();
  }, [origin, destination]);
  
  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime=async()=>{
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
      .then((res)=>res.json())
      .then((data)=>{dispatch(setTravelTimeInformation(data.rows[0].elements[0]))})
    }
    getTravelTime()
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);



  return (
    <MapView 
      ref={mapRef}
      style={{flex:1}}
      mapPadding={{ left: 15, top: 0, right: 0, bottom: 60 }}
      mapType='standard'
      focusable
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      
    {origin && destination && (
      <MapViewDirections
        origin={origin.description}
        destination={destination.description}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="#9234eb"/>
        )}
    {origin?.location && (
      <Marker
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng
        }}
          title="Origin"
          description={origin.description}
          indentifier="origin"/>
      )}

    {destination?.location && (
      <Marker
        coordinate={{
          latitude: destination.location.lat,
          longitude: destination.location.lng
        }}
          title="Destination"
          description={destination.description}
          indentifier="destination"/>
      )}
      </MapView>
    
  )
}

export default Map