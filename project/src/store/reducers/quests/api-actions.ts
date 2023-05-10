import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../../const';
import { Quest } from '../../../types/quest';
import { ThunkOptions } from '../../../types/store';

export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, ThunkOptions>(
  'data/fetchQuests',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Quest[]>(APIRoute.Quests);

      return data;
    } catch {
      throw new Error();
    }
  }
);
