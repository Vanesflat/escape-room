import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { questSlice } from './reducers/quest/quest';
import { questsSlice } from './reducers/quests/quests';

export const rootReducer = combineReducers({
  [NameSpace.Quests]: questsSlice.reducer,
  [NameSpace.Quest]: questSlice.reducer,
});
