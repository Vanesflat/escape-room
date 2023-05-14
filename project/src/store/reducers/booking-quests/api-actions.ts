import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute } from '../../../const';
import { BookingData, BookingPostData } from '../../../types/booking-data';
import { BookingQuest } from '../../../types/booking-quest';
import { ThunkOptions } from '../../../types/store';
import { redirectToRoute } from '../../action';
import { pushNotification } from '../notifications/notifications';

export const fetchBookingQuestsAction = createAsyncThunk<BookingQuest[], undefined, ThunkOptions>(
  'data/fetchBookingQuests',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<BookingQuest[]>(APIRoute.MyQuests);

      return data;
    } catch (err) {
      dispatch(pushNotification({ type: 'error', message: 'Ошибка загрузки забронированных квестов' }));
      throw err;
    }
  }
);

export const bookQuestAction = createAsyncThunk<BookingData, BookingPostData, ThunkOptions>(
  'data/bookQuest',
  async ({ questId, bookingData }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<BookingData>(`${APIRoute.Quests}/${questId}${APIRoute.Booking}`, bookingData);
      dispatch(pushNotification({ type: 'success', message: 'Квест забронирован!' }));
      dispatch(redirectToRoute(AppRoute.MyQuests));

      return data;
    } catch (err) {
      dispatch(pushNotification({ type: 'error', message: 'Ошибка бронирования квеста' }));
      throw err;
    }
  }
);

export const deleteBookingQuestAction = createAsyncThunk<string, string, ThunkOptions>(
  'data/deleteBookingQuest',
  async (placeId, { dispatch, extra: api }) => {
    try {
      await api.delete(`${APIRoute.MyQuests}/${placeId}`);
      dispatch(pushNotification({ type: 'info', message: 'Бронирование удалено' }));

      return placeId;
    } catch (err) {
      dispatch(pushNotification({ type: 'error', message: 'Ошибка удаления бронирования' }));
      throw err;
    }
  }
);
