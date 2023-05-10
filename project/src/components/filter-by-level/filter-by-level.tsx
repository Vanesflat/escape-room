import { Level, levelDictionary } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { changeLevel } from '../../store/reducers/app/app';
import { getCurrentLevel } from '../../store/reducers/app/selectors';
import { ucFirst } from '../../utils/common';

function FilterByLevel(): JSX.Element {
  const currentLevel = useAppSelector(getCurrentLevel);

  const dispatch = useAppDispatch();

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {Object.values(Level).map((level) => (
          <li
            className="filter__item"
            key={level}
            onClick={(evt) => {
              evt.preventDefault();

              dispatch(changeLevel(level));
            }}
          >
            <input type="radio" name="level" id={level} checked={level === currentLevel} readOnly />
            <label className="filter__label" htmlFor={level}><span className="filter__label-text">{ucFirst(levelDictionary[level])}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export default FilterByLevel;
