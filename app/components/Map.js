import MapView, { Marker, Popup } from 'react-map-gl/maplibre';

import { getCenter } from 'geolib';
import maplibregl from 'maplibre-gl';
import { useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';



function Map({ results, mapStyle }) {


    const [selectedLocation, setSelectedLocation] = useState({});

    const coordinates = results.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const center = getCenter(coordinates)
    const markerOffset = [-20, -10]

    return (
        <MapView
            initialViewState={{
                longitude: center.longitude,
                latitude: center.latitude,
                zoom: 12
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle={mapStyle}
        >
            {results.map((result) => (

                <div key={result.long}>

                    <Marker
                        onClick={() => setSelectedLocation(result)}
                        className='cursor-pointer'
                        longitude={result.long}
                        latitude={result.lat}
                        color='#00A699'
                        offset={markerOffset}
                        aria-label="push-pin"
                    />
                    {selectedLocation.long === result.long || (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            offset={markerOffset}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>)

                    }

                    {/* {selectedLocation ? (
                        <Popup
                            offset={markerOffset}
                            // onClose={() => setSelectedLocation({})}
                            // closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ):(false)} */}
                </div>
            ))}

        </MapView>
    )
}

export default Map