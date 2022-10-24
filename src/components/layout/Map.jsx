import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

function RecenterAutomatically ({lat, lng}) {
    const map = useMap()
    useEffect(() => {
      map.setView([lat, lng])
    }, [lat, lng])
    return null
}

function Map() {
    const coordinates = useSelector(state => state.ip.data && state.ip.data.code == undefined ? state.ip.data.location : {})

    const lat = coordinates.lat ? coordinates.lat : 0
    const lng = coordinates.lng ? coordinates.lng : 0

    return lat && lng ? <MapContainer id='map' center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lng]}></Marker>
        <RecenterAutomatically lat={lat} lng={lng} />
    </MapContainer> : <div>Please define an IP Address</div>
}

export default Map