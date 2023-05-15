import { Navigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { getAuthStatus } from '../../store/reducers/user/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const location = useLocation();

  return (
    authorizationStatus.isAuth
      ? children
      : <Navigate to={AppRoute.Login} state={location} />
  );
}

export default PrivateRoute;
