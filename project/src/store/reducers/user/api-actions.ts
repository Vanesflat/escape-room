import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute } from '../../../const';
import { ThunkOptions } from '../../../types/store';
import { dropToken, saveToken } from '../../../services/token';
import { UserData } from '../../../types/user-data';
import { AuthData } from '../../../types/auth-data';
import { redirectToRoute } from '../../action';

export const checkAuthAction = createAsyncThunk<UserData, undefined, ThunkOptions>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      // dispatch(fetchFavoritesAction());

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
      dispatch(redirectToRoute(AppRoute.Main));
      // dispatch(fetchFavoritesAction());

      return data;
    } catch (err) {
      throw new Error();
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
      throw new Error();
    }
  },
);
