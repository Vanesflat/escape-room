import { lazy, Suspense, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import BookingPage from '../../pages/booking-page/booking-page';
import MainPage from '../../pages/main-page/main-page';
import QuestPage from '../../pages/quest-page/quest-page';
import { checkAuthAction } from '../../store/reducers/user/api-actions';
import { getAuthStatus } from '../../store/reducers/user/selectors';
import Loader from '../loader/loader';
import PrivateRoute from '../private-route/private-route';

const ContactsPage = lazy(() => import('../../pages/contacts-page/contacts-page'));
const LoginPage = lazy(() => import('../../pages/login-page/login-page'));
const MyQuestsPage = lazy(() => import('../../pages/my-quests-page/my-quests-page'));
const NotFoundPage = lazy(() => import('../../pages/not-found-page/not-found-page'));

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  if (authorizationStatus.isLoading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <HelmetProvider>
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
          <Route
            path='*'
            element={
              <NotFoundPage />
            }
          />
        </Routes>
      </HelmetProvider>
    </Suspense>
  );
}

export default App;
