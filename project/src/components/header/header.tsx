import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { getAuthStatus } from '../../store/reducers/user/selectors';
import LoginButton from '../login-button/login-button';
import Logo from '../logo/logo';

type HeaderProps = {
  hasLoginButton: boolean;
};

function Header({ hasLoginButton }: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);

  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo />
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <NavLink className="link" to={AppRoute.Main} end>Квесты</NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink className="link" to={AppRoute.Contacts}>Контакты</NavLink>
            </li>
            {authorizationStatus.isAuth && (
              <li className="main-nav__item">
                <NavLink className="link" to={AppRoute.MyQuests}>Мои бронирования</NavLink>
              </li>
            )}
          </ul>
        </nav>
        <div className="header__side-nav">
          {hasLoginButton && <LoginButton />}
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
