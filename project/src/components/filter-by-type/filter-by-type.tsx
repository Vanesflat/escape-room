import { Type, typeDictionary } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { changeType } from '../../store/reducers/app/app';
import { getCurrentType } from '../../store/reducers/app/selectors';
import { ucFirst } from '../../utils/common';

function FilterByType(): JSX.Element {
  const typesSettings = {
    [Type.All]: {
      iconName: 'all-quests',
      width: 26
    },
    [Type.Adventures]: {
      iconName: 'adventure',
      width: 36
    },
    [Type.Horror]: {
      iconName: Type.Horror,
      width: 30
    },
    [Type.Mystic]: {
      iconName: Type.Mystic,
      width: 30
    },
    [Type.Detective]: {
      iconName: Type.Detective,
      width: 40
    },
    [Type.SciFi]: {
      iconName: Type.SciFi,
      width: 28
    }
  };
  const currentType = useAppSelector(getCurrentType);

  const dispatch = useAppDispatch();

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {Object.values(Type).map((type) => (
          <li
            className="filter__item"
            key={type}
            onClick={(evt) => {
              evt.preventDefault();

              dispatch(changeType(type));
            }}
          >
            <input type="radio" name="type" id={type} checked={type === currentType} readOnly />
            <label className="filter__label" htmlFor={type}>
              <svg
                className="filter__icon"
                width={typesSettings[type].width}
                height="30"
                aria-hidden="true"
              >
                <use xlinkHref={`#icon-${typesSettings[type].iconName}`}></use>
              </svg><span className="filter__label-text">{ucFirst(typeDictionary[type])}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export default FilterByType;
