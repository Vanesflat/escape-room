import { Quest } from '../../../types/quest';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptions } from '../../../types/store';
import { APIRoute } from '../../../const';

export const fetchQuestAction = createAsyncThunk<Quest, string, ThunkOptions>(
  'data/fetchQuest',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Quest>(`${APIRoute.Quests}/${offerId}`);

      return data;
    } catch (err) {
      throw new Error();
    }
  }
);
