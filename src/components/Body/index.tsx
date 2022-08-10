import classes from './style.module.scss';
import { FC, ReactNode } from 'react';
import { classNames } from '../../utils/classNames';

interface IBody {
  id: number;
  label: string;
  isVisible: boolean;
  page?: ReactNode;
}

export const Body: FC<IBody> = ({ id, label, page, isVisible }) => {
  return (
    <div
      className={classNames(classes.container, {
        [classes.visible]: isVisible,
        [classes.second]: id === 2,
        [classes.third]: id === 3
      })}
    >
      <div className={classes.container__title}>{label}</div>
      <div className={classes.container__body}> {page}</div>
    </div>
  );
};
