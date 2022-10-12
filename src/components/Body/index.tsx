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
      <div
        className={classNames(classes.container__title, {
          [classes.image_1]: id === 1,
          [classes.image_2]: id === 2,
          [classes.image_3]: id === 3
        })}
      >
        {label}
      </div>
      <div className={classes.container__main}>{page}</div>
    </div>
  );
};
