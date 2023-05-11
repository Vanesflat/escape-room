import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map/use-map';
import 'leaflet/dist/leaflet.css';
import { Marker } from 'leaflet';
import { defaultCustomIcon, officeLocation } from '../../const';

function MapContacts(): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, officeLocation);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: officeLocation.latitude,
        lng: officeLocation.longitude
      });

      marker.setIcon(defaultCustomIcon).addTo(map);
    }
  }, [map]);

  return (
    <div className="map">
      <div className="map__container" ref={mapRef}></div>
    </div>
  );
}

export default MapContacts;
