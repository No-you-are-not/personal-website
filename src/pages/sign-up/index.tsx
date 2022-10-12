import classes from './style.module.scss';
import { EyeCrossIcon, EyeIcon } from '../../components/icons';
import { Button } from '../../components/Button';
import { useState } from 'react';

const SignUpPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.container__form}>
        <div className={classes.inner}>
          <div className={classes.container__form__label}>
            <label htmlFor={'email'}>Email:</label>
          </div>
          <div className={classes.container__form__input}>
            <input placeholder={'email@finance.buddy'} id="email" />
          </div>
        </div>
        <div className={classes.inner}>
          <div className={classes.container__form__label}>
            <label htmlFor={'username'}>Username:</label>
          </div>
          <div className={classes.container__form__input}>
            <input placeholder={'finance-buddy'} id="username" />
          </div>
        </div>
        <div>
          <div className={classes.container__form__label}>
            <label htmlFor={'password'}>Password:</label>
          </div>
          <div className={classes.container__form__input}>
            <input
              placeholder={'paSSword123*'}
              id="password"
              type={isPasswordVisible ? 'text' : 'password'}
            />
            <div
              onClick={() => setIsPasswordVisible((prev) => !prev)}
              className={classes.container__form__input__svg}
            >
              {isPasswordVisible ? <EyeIcon /> : <EyeCrossIcon />}
            </div>
          </div>
        </div>
        <div className={classes.container__form__btn}>
          <Button color={'pink'}>Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
