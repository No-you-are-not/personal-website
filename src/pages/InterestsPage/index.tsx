import classes from './style.module.scss';
import { Text } from '../../components/Text';

export const InterestsPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__text}>
        <Text>
          Here are a few technologies that i would love to explore and to work
          with
        </Text>
      </div>
      <ul>
        <li>React Native</li>
        <li>Node js/Nest js</li>
        <li>Motion UI</li>
      </ul>
    </div>
  );
};
