import { memo } from 'react';
import { Date, dateDictionary } from '../../const';
import { Slots } from '../../types/quest';
import DateItem from '../date-item/date-item';
import Loader from '../loader/loader';

type DateListProps = {
  slots: Slots;
  onDateChange: (date: Date, time: string) => void;
};

function DateList({ slots, onDateChange }: DateListProps): JSX.Element {
  if (!slots) {
    return <Loader />;
  }

  return (
    <>
      {Object.entries(slots).map(([date, infoList]) => (
        <fieldset className="booking-form__date-section" key={date}>
          <legend className="booking-form__date-title">{dateDictionary[date as Date]}</legend>
          <div className="booking-form__date-inner-wrapper">
            {infoList.map((info) => (
              <DateItem
                key={info.time}
                date={date as Date}
                info={info}
                onDateChange={onDateChange}
              />
            ))}
          </div>
        </fieldset>
      ))}
    </>
  );
}

export default memo(DateList);
