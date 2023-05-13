import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map/use-map';
import 'leaflet/dist/leaflet.css';
import { layerGroup, Marker } from 'leaflet';
import { currentCustomIcon, defaultCustomIcon } from '../../const';
import { QuestPlace } from '../../types/quest';

type BookingMapProps = {
  currentQuestPlace: QuestPlace;
  questPlaces: QuestPlace[];
  onMarkerClick: (questPlace: QuestPlace) => void;
};

function BookingMap({ currentQuestPlace, questPlaces, onMarkerClick }: BookingMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, { latitude: currentQuestPlace.location.coords[0], longitude: currentQuestPlace.location.coords[1] });

  useEffect(() => {
    if (map) {
      map.setView(currentQuestPlace.location.coords);
      const markerLayer = layerGroup().addTo(map);
      questPlaces.forEach((questPlace) => {
        const marker = new Marker({
          lat: questPlace.location.coords[0],
          lng: questPlace.location.coords[1]
        });

        marker.setIcon(
          questPlace.location.address === currentQuestPlace.location.address
            ? currentCustomIcon
            : defaultCustomIcon
        ).on('click', () => onMarkerClick(questPlace))
          .addTo(markerLayer);
      });
    }
  }, [map, questPlaces, currentQuestPlace, onMarkerClick]);

  return (
    <div className="booking-map">
      <div className="map">
        <div className="map__container" ref={mapRef}></div>
      </div>
      <p className="booking-map__address">Вы&nbsp;выбрали: {currentQuestPlace.location.address}</p>
    </div>
  );
}

export default BookingMap;
