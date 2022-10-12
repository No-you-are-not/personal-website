import classes from './style.module.scss';
import { FC, ReactNode } from 'react';

interface IText {
  children?: ReactNode;
}

export const Text: FC<IText> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};
