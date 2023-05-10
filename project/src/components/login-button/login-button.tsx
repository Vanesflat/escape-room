import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { logoutAction } from '../../store/reducers/user/api-actions';
import { getAuthStatus } from '../../store/reducers/user/selectors';

function LoginButton(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);

  const dispatch = useAppDispatch();

  return (
    authorizationStatus.isAuth ?
      <Link
        className="btn btn--accent header__side-item"
        to={AppRoute.Login}
        onClick={(evt) => {
          evt.preventDefault();

          dispatch(logoutAction());
        }}
      >
        Выйти
      </Link>
      :
      <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
  );
}

export default LoginButton;
