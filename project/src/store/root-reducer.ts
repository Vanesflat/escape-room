import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appSlice } from './reducers/app/app';
import { questSlice } from './reducers/quest/quest';
import { questsSlice } from './reducers/quests/quests';
import { bookingQuestsSlice } from './reducers/booking-quests/booking-quests';
import { userSlice } from './reducers/user/user';
import { notificationsSlice } from './reducers/notifications/notifications';
import { questPlacesSlice } from './reducers/quest-places/quest-places';

export const rootReducer = combineReducers({
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.Quests]: questsSlice.reducer,
  [NameSpace.Quest]: questSlice.reducer,
  [NameSpace.QuestPlaces]: questPlacesSlice.reducer,
  [NameSpace.BookingQuests]: bookingQuestsSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Notification]: notificationsSlice.reducer
});
