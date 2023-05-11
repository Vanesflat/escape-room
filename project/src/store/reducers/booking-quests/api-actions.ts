import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../../const';
import { BookingQuest } from '../../../types/booking-quest';
import { ThunkOptions } from '../../../types/store';

export const fetchBookingQuestsAction = createAsyncThunk<BookingQuest[], undefined, ThunkOptions>(
  'data/fetchBookingQuestsAction',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<BookingQuest[]>(APIRoute.MyQuests);

      return data;
    } catch (err) {
      throw new Error();
    }
  }
);