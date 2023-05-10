import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { State } from '../../../types/store';
import { filterByLevel, filterByType } from '../../../utils/filter';
import { getCurrentLevel, getCurrentType } from '../app/selectors';

export const getQuests = (state: State) => state[NameSpace.Quests].quests;

export const getFilteredByTypeQuests = createSelector(
  [getCurrentType, getQuests],
  (type, quests) => filterByType(type, quests)
);

export const getRenderedQuests = createSelector(
  [getCurrentLevel, getFilteredByTypeQuests],
  (level, quests) => filterByLevel(level, quests)
);
