import { useCallback, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Date } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { bookQuestAction } from '../../store/reducers/booking-quests/api-actions';
import { getCurrentQuestPlace } from '../../store/reducers/quest-places/selectors';
import { getQuest } from '../../store/reducers/quest/selectors';
import { BookingData, BookingPostData } from '../../types/booking-data';
import { BookingFormFields, FormField } from '../../types/form';
import DateList from '../date-list/date-list';
import Loader from '../loader/loader';
import classes from './booking-form.module.scss';

type FormFieldKey = keyof BookingFormFields;

const bookingFields: Record<FormFieldKey, FormField> = {
  name: {
    type: 'text',
    label: 'Ваше имя',
    placeholder: 'Имя',
    pattern: /^.{1,15}$/,
    errorText: 'От 1 до 15 символов'
  },
  tel: {
    type: 'tel',
    label: 'Контактный телефон',
    placeholder: 'Телефон',
    pattern: /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){9,12}\d$/,
    errorText: 'Пожалуйста, введите корректный номер телефона'
  },
  person: {
    type: 'number',
    label: 'Количество участников',
    placeholder: 'Количество участников',
    pattern: /[^0-9]/i,
    errorText: ''
  }
};

const bookingFieldKeys = Object.keys(bookingFields) as FormFieldKey[];

function BookingForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    reset
  } = useForm<BookingFormFields>({
    mode: 'onChange'
  });

  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  const [withChildren, setWithChildren] = useState(false);

  const dispatch = useAppDispatch();

  const onDateChange = useCallback((date: Date, time: string): void => {
    setCurrentDate(date);
    setCurrentTime(time);
  }, []);

  const quest = useAppSelector(getQuest);
  const currentQuestPlace = useAppSelector(getCurrentQuestPlace);

  if (!quest || !currentQuestPlace) {
    return <Loader />;
  }

  const [minPersonCount, maxPersonCount] = quest.peopleMinMax;

  bookingFields.person.pattern = new RegExp(`^([${minPersonCount}-${maxPersonCount}])$`);
  bookingFields.person.errorText = `Количество участников от ${minPersonCount} до ${maxPersonCount}`;

  const resetBookingFormData = () => {
    setCurrentDate(null);
    setCurrentTime('');
    setWithChildren(false);
    reset();
  };

  const onSubmit: SubmitHandler<BookingFormFields> = (data) => {
    const bookingData: BookingData = {
      contactPerson: data.name,
      phone: data.tel,
      peopleCount: +data.person,
      date: currentDate as Date,
      time: currentTime,
      withChildren: withChildren,
      placeId: currentQuestPlace.id
    };

    const bookingPostData: BookingPostData = {
      questId: quest.id,
      bookingData: bookingData
    };

    dispatch(bookQuestAction(bookingPostData));
    resetBookingFormData();
  };

  return (
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <DateList
          onDateChange={onDateChange}
          slots={currentQuestPlace.slots}
        />
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        {bookingFieldKeys.map((key: FormFieldKey) => {
          const { type, label, placeholder, pattern, errorText } = bookingFields[key];

          return (
            <div className="custom-input login-form__input" key={key}>
              <label className="custom-input__label" htmlFor={key}>{label}</label>
              <input
                {...register(`${key}`, {
                  required: 'Это обязательное поле',
                  pattern: {
                    value: pattern,
                    message: errorText
                  }
                })}
                type={type}
                id={key}
                name={key}
                placeholder={placeholder}
              />
              {errors[key] && <div className={classes.errorMessage}>{errors[key]?.message}</div>}
            </div>
          );
        })}
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            id="children"
            name="children"
            onChange={() => setWithChildren(!withChildren)}
          />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit"
      >
        Забронировать
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <Link className="link link--active-silver link--underlined" to="#">правилами обработки персональных данных</Link>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default BookingForm;
