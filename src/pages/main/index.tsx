import { useState } from 'react';
import { Window } from '../../components/Window';

import classes from './style.module.scss';
import { IFolderData } from '../../interfaces/data';
import { EducationPage } from '../EducationPage';
import { InterestsPage } from '../InterestsPage';
import { JourneyPage } from '../JourneyPage';
import { SelfAnalysisPage } from '../SelfAnalysisPage';
import { ExperiencePage } from '../ExperiencePage';
import { ProjectsPage } from '../ProjectsPage';
import { HobbiesPage } from '../HobbiesPage';
import { SocialsPage } from '../SocialsPage';

const folderData: IFolderData[] = [
  {
    id: 1,
    label: 'About me',
    tabs: [
      {
        id: 1,
        label: 'Education',
        post: <EducationPage />
      },
      {
        id: 2,
        label: 'Journey',
        post: <JourneyPage />
      },
      {
        id: 3,
        label: 'Self analysis',
        post: <SelfAnalysisPage />
      }
    ]
  },
  {
    id: 2,
    label: 'My job',
    tabs: [
      {
        id: 1,
        label: 'Experience',
        post: <ExperiencePage />
      },
      {
        id: 2,
        label: 'Projects',
        post: <ProjectsPage />
      },
      {
        id: 3,
        label: 'Interests',
        post: <InterestsPage />
      }
    ]
  },
  {
    id: 3,
    label: 'Other activities',
    tabs: [
      {
        id: 1,
        label: 'Hobbies',
        post: <HobbiesPage />
      },
      {
        id: 2,
        label: 'Socials',
        post: <SocialsPage />
      }
    ]
  }
];

type viewType = '90sWindows' | 'modernClassic';

const MainPage = () => {
  const [windowOpen, setWindowOpen] = useState<null | number[]>(null);
  const [view, setView] = useState<viewType>('90sWindows');
  return (
    <div className="App">
      <div className={classes.view}>
        <button
          onClick={() =>
            setView((p) =>
              p === '90sWindows' ? 'modernClassic' : '90sWindows'
            )
          }
        >
          Switch view
        </button>
      </div>
      {view === '90sWindows' ? (
        <div>
          {folderData.map((el) => (
            <div
              key={el.id}
              style={{ zIndex: Number(windowOpen?.indexOf(el.id) || 0) + 1 }}
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
                <div className={classes.folder__img}>
                  <img
                    src={
                      windowOpen?.includes(el.id)
                        ? '../images/folder-open2.jpeg'
                        : '../images/folder-close.png'
                    }
                  />
                </div>
                <div className={classes.folder__title}>{el.label}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={classes.container}>
          <div className={classes.container__sign_in}>
            <div className={classes.container__sign_in__name}>
              <div className={classes.container__sign_in__name__legend}>
                username:
              </div>
              <input />
            </div>
            <div className={classes.container__sign_in__password}>
              <div className={classes.container__sign_in__name__legend}>
                password:
              </div>
              <input type={'password'} />
            </div>
            <div className={classes.container__sign_in__btn}>
              <button>Sign In</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
