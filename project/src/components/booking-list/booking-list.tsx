import { BookingQuest } from '../../types/booking-quest';
import BookingQuestCard from '../booking-card/booking-card';
import QuestsEmpty from '../quests-empty/quests-empty';

type BookingListProps = {
  bookingQuests: BookingQuest[];
}

function BookingList({ bookingQuests }: BookingListProps): JSX.Element {
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
