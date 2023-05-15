import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../../const';
import { ThunkOptions } from '../../../types/store';
import { dropToken, saveToken } from '../../../services/token';
import { UserData } from '../../../types/user-data';
import { AuthData } from '../../../types/auth-data';
import { fetchBookingQuestsAction } from '../booking-quests/api-actions';
import { pushNotification } from '../notifications/notifications';

export const checkAuthAction = createAsyncThunk<UserData, undefined, ThunkOptions>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(fetchBookingQuestsAction());

      return data;
    } catch {
      throw new Error();
    }
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, ThunkOptions>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(pushNotification({ type: 'success', message: 'Вход выполнен успешно!' }));
      dispatch(fetchBookingQuestsAction());

      return data;
    } catch (err) {
      dispatch(pushNotification({ type: 'error', message: 'Ошибка входа' }));
      throw err;
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
    } catch (err) {
      dispatch(pushNotification({ type: 'error', message: 'Ошибка выхода' }));
      throw err;
    }
  },
);
