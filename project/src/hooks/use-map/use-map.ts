import { Map, TileLayer } from 'leaflet';
import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { DEFAULT_ZOOM } from '../../const';
import { LocationCoordinates } from '../../types/map';

const LAYER_SETTING = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
};

function useMap(mapRef: MutableRefObject<HTMLElement | null>, locationCoordinates: LocationCoordinates): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: locationCoordinates.latitude,
          lng: locationCoordinates.longitude
        },
        zoom: locationCoordinates.zoom || DEFAULT_ZOOM
      });

      const layer = new TileLayer(
        LAYER_SETTING.url,
        { attribution: LAYER_SETTING.attribution }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, locationCoordinates]);

  return map;
}

export default useMap;
