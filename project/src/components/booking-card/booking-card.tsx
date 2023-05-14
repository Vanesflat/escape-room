import { memo } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute, dateDictionary, levelDictionary } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { deleteBookingQuestAction } from '../../store/reducers/booking-quests/api-actions';
import { BookingQuest } from '../../types/booking-quest';
import { ucFirst } from '../../utils/common';

type BookingQuestCardProps = {
  bookingQuest: BookingQuest;
};

function BookingQuestCard({ bookingQuest }: BookingQuestCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(deleteBookingQuestAction(bookingQuest.id));
  };

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={bookingQuest.quest.previewImgWebp} />
          <img src={bookingQuest.quest.previewImg} width="344" height="232" alt={bookingQuest.quest.title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper"><Link className="quest-card__link" to={generatePath(AppRoute.Quest, { id: `${bookingQuest.quest.id}` })}>{bookingQuest.quest.title}</Link>
          <span className="quest-card__info">{`${ucFirst(dateDictionary[bookingQuest.date])}, ${bookingQuest.time}. ${bookingQuest.location.address}`}</span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{bookingQuest.peopleCount}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{levelDictionary[bookingQuest.quest.level]}
          </li>
        </ul>
        <button
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
          onClick={handleClick}
        >
          Отменить
        </button>
      </div>
    </div>
  );
}

export default memo(BookingQuestCard);
