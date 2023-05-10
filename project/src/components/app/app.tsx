import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import BookingPage from '../../pages/booking-page/booking-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import QuestPage from '../../pages/quest-page/quest-page';
import { checkAuthAction } from '../../store/reducers/user/api-actions';
import HistoryRouter from '../history-router/history-router';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Contacts}
            element={<ContactsPage />}
          />
          <Route
            path={AppRoute.Quest}
            element={<QuestPage />}
          />
          <Route
            path={AppRoute.MyQuests}
            element={
              <PrivateRoute>
                <MyQuestsPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Booking}
            element={
              <PrivateRoute>
                <BookingPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
