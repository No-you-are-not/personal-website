import classes from './style.module.scss';

export const EducationPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__row}>
        <div className={classes.container__row__img}>
          <img src={'../images/download.jpeg'} />
        </div>
        <div className={classes.container__row__text}>
          here is a lot of text to fill up the space about what we are going to
          do here soon. First we want to add trashcan for the aestethik and
          second we want to add ability to ad your own wallpaper wohooo yey! Get
          ready to be exited about our other ideas.
        </div>
      </div>
      <div className={classes.container__row}>
        <div className={classes.container__row__text}>
          here is a lot of text to fill up the space about what we are going to
          do here soon. First we want to add trashcan for the aestethik and
          second we want to add ability to ad your own wallpaper wohooo yey! Get
          ready to be exited about our other ideas.
        </div>
        <div className={classes.container__row__img}>
          <img src={'../images/cute_ugly.jpeg'} />
        </div>
      </div>
      <div className={classes.container__row}>
        <div className={classes.container__row__img}>
          <img src={'../images/cute_ugly_2.webp'} />
        </div>
        <div className={classes.container__row__text}>
          here is a lot of text to fill up the space about what we are going to
          do here soon. First we want to add trashcan for the aestethik and
          second we want to add ability to ad your own wallpaper wohooo yey! Get
          ready to be exited about our other ideas.
        </div>
      </div>
    </div>
  );
};
