import { useState } from 'react';
import { Window } from '../../components/Window';

import classes from './style.module.scss';
import { IFolderData } from '../../interfaces/data';

const folderData: IFolderData[] = [
  {
    id: 1,
    label: 'About me',
    tabs: [
      {
        id: 1,
        label: 'Education'
      },
      {
        id: 2,
        label: 'Journey'
      },
      {
        id: 3,
        label: 'Self analysis'
      }
    ]
  },
  {
    id: 2,
    label: 'My job',
    tabs: [
      {
        id: 1,
        label: 'Experience'
      },
      {
        id: 2,
        label: 'Projects'
      },
      {
        id: 3,
        label: 'Interests'
      }
    ]
  },
  {
    id: 3,
    label: 'Other activities',
    tabs: [
      {
        id: 1,
        label: 'Hobbies'
      },
      {
        id: 2,
        label: 'Socials'
      }
    ]
  }
];

export const MainPage = () => {
  const [windowOpen, setWindowOpen] = useState<null | number[]>(null);
  return (
    <div className="App">
      {folderData.map((el) => (
        <div
          key={el.id}
          style={{ zIndex: Number(windowOpen?.indexOf(el.id)) + 1 }}
        >
          <Window
            tabs={el.tabs}
            isOpen={!!windowOpen?.includes(el.id)}
            setOpen={() =>
              setWindowOpen((prev) =>
                prev && prev?.length > 1
                  ? prev.filter((e) => e !== el.id)
                  : null
              )
            }
          />
          <div
            onClick={() =>
              setWindowOpen((prev) => (prev ? [...prev, el.id] : [el.id]))
            }
            className={classes.folder}
          >
            <img
              src={
                windowOpen?.includes(el.id)
                  ? '../images/folder-open2.jpeg'
                  : '../images/folder-close.png'
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};
