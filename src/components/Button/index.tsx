import { FC, ReactNode, useMemo } from 'react';
import classes from './style.module.scss';
import { classNames } from '../../utils/classNames';

type buttonColor = 'pink' | 'green' | 'blue';
type buttonType = 'small' | 'normal' | 'big' | 'round';

interface IButtonProps {
  children: ReactNode;
  color?: buttonColor;
  type?: buttonType;
  isResponsive?: boolean;
}

export const Button: FC<IButtonProps> = ({
  children,
  color = 'green',
  type = 'normal',
  isResponsive = false
}) => {
  const totalClassName = useMemo(() => {
    const result = {
      [classes[color]]: true,
      [classes[type]]: true,
      [classes.container]: true,
      [classes.responsive]: isResponsive
    };

    return `${classNames(result)}`;
  }, [color, isResponsive, type]);
  return <button className={totalClassName}>{children}</button>;
};
