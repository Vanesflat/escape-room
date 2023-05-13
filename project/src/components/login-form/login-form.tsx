import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { loginAction } from '../../store/reducers/user/api-actions';
import { getLoginStatus } from '../../store/reducers/user/selectors';
import { FormField, LoginFormFields } from '../../types/form';
import Loader from '../loader/loader';
import classes from './login-form.module.scss';

type FormFieldKey = keyof LoginFormFields;

const loginFields: Record<FormFieldKey, FormField> = {
  email: {
    type: 'email',
    label: 'E - mail',
    placeholder: 'Адрес электронной почты',
    pattern: EMAIL_PATTERN,
    errorText: 'Введён некорректный адрес электронной почты'
  },
  password: {
    type: 'password',
    label: 'Пароль',
    placeholder: 'Пароль',
    pattern: PASSWORD_PATTERN,
    errorText: 'Пароль должен содержать хотя бы одну цифру и букву'
  }
};

function LoginForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
  } = useForm<LoginFormFields>({
    mode: 'onChange'
  });

  const loginFieldKeys = Object.keys(loginFields) as FormFieldKey[];
  const loginStatus = useAppSelector(getLoginStatus);

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => {
    dispatch(loginAction({
      login: data.email,
      password: data.password
    }));
  };

  return (
    <div className="login__form">
      <form
        className="login-form"
        action="https://echo.htmlacademy.ru/"
        method="post"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="login-form__inner-wrapper">
          <h1 className="title title--size-s login-form__title">Вход</h1>
          <div className="login-form__inputs">
            {loginFieldKeys.map((key: FormFieldKey) => {
              const { type, label, placeholder, pattern, errorText } = loginFields[key];

              return (
                <div className="custom-input login-form__input" key={key}>
                  <label className="custom-input__label" htmlFor={key}>{label}</label>
                  <input
                    {...register(`${key}`, {
                      required: 'Это обязательное поле',
                      pattern: {
                        value: pattern,
                        message: errorText
                      }
                    })}
                    type={type}
                    id={key}
                    name={key}
                    placeholder={placeholder}
                  />
                  {errors[key] && <div className={classes.errorMessage}>{errors[key]?.message}</div>}
                </div>
              );
            })}
          </div>
          <button
            className="btn btn--accent btn--general login-form__submit"
          >
            {loginStatus.isLoading ? <Loader isSmall={loginStatus.isLoading} /> : 'Войти'}
          </button>
        </div>
        <label className="custom-checkbox login-form__checkbox">
          <input
            type="checkbox"
            id="id-order-agreement"
            name="user-agreement"
            required
          />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Я&nbsp;согласен с
            <Link className="link link--active-silver link--underlined" to="#">правилами обработки персональных данных</Link>&nbsp;и пользовательским соглашением
          </span>
        </label>
      </form >
    </div >
  );
}

export default LoginForm;
