import { ChangeEvent, FormEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { loginAction } from '../../store/reducers/user/api-actions';
import { getAuthStatus } from '../../store/reducers/user/selectors';

type Field = {
  value: string;
};

function LoginPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const [formData, setFormData] = useState<Record<string, Field>>({
    email: {
      value: ''
    },
    password: {
      value: ''
    }
  });

  const dispatch = useAppDispatch();

  if (authorizationStatus.isAuth) {
    return (
      <Navigate to={AppRoute.Main} />
    );
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(loginAction({
      login: formData.email.value,
      password: formData.password.value
    }));
  };

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
          <div className="login__form">
            <form
              className="login-form"
              action="https://echo.htmlacademy.ru/"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Адрес электронной почты"
                      onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                        setFormData({ ...formData, [evt.target.name]: { ...formData[evt.target.name], value: evt.target.value } });
                      }}
                      required
                    />
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">Пароль</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Пароль"
                      onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                        setFormData({ ...formData, [evt.target.name]: { ...formData[evt.target.name], value: evt.target.value } });
                      }}
                      required
                    />
                  </div>
                </div>
                <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
                <span className="custom-checkbox__icon">
                  <svg width="20" height="17" aria-hidden="true">
                    <use xlinkHref="#icon-tick"></use>
                  </svg>
                </span>
                <span className="custom-checkbox__label">Я&nbsp;согласен с
                  <a className="link link--active-silver link--underlined" href="/#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default LoginPage;
