import { generatePath, Navigate, useLocation } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import LoginForm from '../../components/login-form/login-form';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { getQuest } from '../../store/reducers/quest/selectors';
import { getAuthStatus } from '../../store/reducers/user/selectors';

function LoginPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const quest = useAppSelector(getQuest);

  const location = useLocation();
  const route = quest && location.state ? generatePath(AppRoute.Booking, { id: quest.id }) : AppRoute.Main;

  if (authorizationStatus.isAuth) {
    return (
      <Navigate to={route} />
    );
  }

  return (
    <Layout pageTitle="Авторизация" hasLoginButton={false}>
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <LoginForm />
        </div>
      </main>
    </Layout>
  );
}

export default LoginPage;
