import classes from './style.module.scss';
import { classNames } from '../../utils/classNames';
import { FC } from 'react';
import { ITabData } from '../../interfaces/data';

interface IHeader {
  setOpen: any;
  tabs: ITabData[];
  activeTab: number;
  setActiveTab: any;
}

export const Header: FC<IHeader> = ({
  setOpen,
  tabs,
  activeTab,
  setActiveTab
}) => {
  return (
    <div className={classes.tabs}>
      <button onClick={() => setOpen(false)} className={classes.close}>
        ✕
      </button>
      <div className={classes.empty} />
      {tabs.map((el: ITabData) => (
        <div
          onClick={() => setActiveTab(el.id)}
          key={el.id}
          className={classNames(classes.tabs_item, {
            [classes.left]: el.id === 1,
            [classes.active]: activeTab === el.id
          })}
        >
          {el.label}
        </div>
      ))}
      <div className={classes.patch} />
    </div>
  );
};
