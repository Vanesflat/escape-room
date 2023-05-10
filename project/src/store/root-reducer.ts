import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appSlice } from './reducers/app/app';
import { questSlice } from './reducers/quest/quest';
import { questsSlice } from './reducers/quests/quests';
import { userSlice } from './reducers/user/user';

export const rootReducer = combineReducers({
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.Quests]: questsSlice.reducer,
  [NameSpace.Quest]: questSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});
