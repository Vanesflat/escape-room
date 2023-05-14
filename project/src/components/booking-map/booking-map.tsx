import { useCallback, useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map/use-map';
import 'leaflet/dist/leaflet.css';
import { layerGroup, Marker } from 'leaflet';
import { currentCustomIcon, defaultCustomIcon } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { getCurrentQuestPlace, getQuestPlaces } from '../../store/reducers/quest-places/selectors';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { changeCurrentPlace } from '../../store/reducers/quest-places/quest-places';
import { QuestPlace } from '../../types/quest';

function BookingMap(): JSX.Element {
  let currentQuestPlace = useAppSelector(getCurrentQuestPlace);
  const questPlaces = useAppSelector(getQuestPlaces);

  const dispatch = useAppDispatch();
  const mapRef = useRef(null);

  if (!currentQuestPlace) {
    currentQuestPlace = questPlaces[0];
  }

  const map = useMap(mapRef, { latitude: currentQuestPlace.location.coords[0], longitude: currentQuestPlace.location.coords[1] });

  const handleMarkerClick = useCallback((questPlace: QuestPlace): void => {
    dispatch(changeCurrentPlace(questPlace));
  }, [dispatch]);

  useEffect(() => {
    if (map && currentQuestPlace) {
      map.setView(currentQuestPlace.location.coords);
      const markerLayer = layerGroup().addTo(map);
      questPlaces.forEach((questPlace) => {
        const marker = new Marker({
          lat: questPlace.location.coords[0],
          lng: questPlace.location.coords[1]
        });

        marker.setIcon(
          currentQuestPlace && questPlace.location.address === currentQuestPlace.location.address
            ? currentCustomIcon
            : defaultCustomIcon
        ).on('click', () => handleMarkerClick(questPlace))
          .addTo(markerLayer);
      });
    }
  }, [map, questPlaces, currentQuestPlace, handleMarkerClick]);

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
