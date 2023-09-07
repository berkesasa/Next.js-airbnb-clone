import MapView, { Marker, Popup } from 'react-map-gl/maplibre';
import { getCenter } from 'geolib';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

function Map({ results }) {

    const coordinates = results.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const center = getCenter(coordinates)

    return (
        <MapView
            initialViewState={{
                longitude: center.longitude,
                latitude: center.latitude,
                zoom: 12
            }}
            style={{width: "100%", height: "100%"}}
            mapStyle={`https://api.maptiler.com/maps/067adaad-17b2-4574-9e2c-cdd91074ecbb/style.json?key=${process.env.maplibre_key}`}
        >
            {results.map(result => (
                
                <div key={result.long}>
                    
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        color='#00A699'
                    >
                    </Marker>
                </div>
            ))}

        </MapView>
    )
}

export default Map