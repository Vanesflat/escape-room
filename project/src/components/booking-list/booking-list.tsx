import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { getBookingQuests } from '../../store/reducers/booking-quests/selectors';
import BookingQuestCard from '../booking-card/booking-card';
import QuestsEmpty from '../quests-empty/quests-empty';

function BookingList(): JSX.Element {
  const bookingQuests = useAppSelector(getBookingQuests);

  if (!bookingQuests.length) {
    return <QuestsEmpty />;
  }

  return (
    <div className="cards-grid">
      {bookingQuests.map((bookingQuest) => (
        <BookingQuestCard
          key={bookingQuest.id}
          bookingQuest={bookingQuest}
        />
      ))}
    </div>
  );
}

export default BookingList;
