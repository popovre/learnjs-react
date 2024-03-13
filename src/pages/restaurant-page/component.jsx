import TabsContainer from '../../components/restaurant-tabs/container';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';
import styles from './style.module.scss';

const RestaurantPage = () => {
  return (
    <div className={classNames(styles.root)}>
      <TabsContainer />
      <Outlet />
    </div>
  );
};

export default RestaurantPage;
