import { BookingQuest } from '../../types/booking-quest';
import BookingQuestCard from '../booking-card/booking-card';

type BookingListProps = {
  bookingQuests: BookingQuest[];
}

function BookingList({ bookingQuests }: BookingListProps): JSX.Element {
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
