import classes from './style.module.scss';
import { Header } from '../Header';
import { FC, useState } from 'react';
import { classNames } from '../../utils/classNames';
import { ITabData } from '../../interfaces/data';
import { Body } from '../Body';

interface IWindow {
  isOpen: boolean;
  setOpen: any;
  tabs: ITabData[];
}

export const Window: FC<IWindow> = ({ isOpen, setOpen, tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <div className={classNames(classes.container, { [classes.open]: isOpen })}>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setOpen={setOpen}
        tabs={tabs}
      />
      {tabs.map((el) => (
        <Body
          page={el.post}
          key={el.id}
          isVisible={activeTab === el.id}
          id={el.id}
          label={el.label}
        />
      ))}
    </div>
  );
};
