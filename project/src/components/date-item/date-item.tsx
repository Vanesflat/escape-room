import { Date } from '../../const';
import { DateInfo } from '../../types/quest';
import { formatTime } from '../../utils/common';

type DateItemProps = {
  date: Date;
  info: DateInfo;
  onDateChange: (date: Date, time: string) => void;
};

function DateItem({ date, info, onDateChange }: DateItemProps): JSX.Element {
  const { time, isAvailable } = info;

  return (
    <label className="custom-radio booking-form__date" key={time}>
      <input
        type="radio"
        id={`${date}${formatTime(time)}`}
        name="date"
        value={`${date}${formatTime(time)}`}
        disabled={!isAvailable}
        onChange={() => onDateChange(date, time)}
        required
      />
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}

export default DateItem;
