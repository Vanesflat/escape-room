import { QuestPlace } from '../../../types/quest';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptions } from '../../../types/store';
import { APIRoute } from '../../../const';
import { pushNotification } from '../notifications/notifications';

export const fetchQuestPlacesAction = createAsyncThunk<QuestPlace[], string, ThunkOptions>(
  'data/fetchQuestPlaces',
  async (questId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<QuestPlace[]>(`${APIRoute.Quests}/${questId}${APIRoute.Booking}`);

      return data;
    } catch (err) {
      dispatch(pushNotification({ type: 'error', message: 'Ошибка загрузки мест проведения' }));
      throw err;
    }
  }
);
