import classNames from 'classnames';
import styles from './style.module.scss';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Restaurant = ({ restaurant }) => {
  return (
    <div className={classNames(styles.root)}>
      <h1 className={classNames(styles.h1, styles.restaurantName)}>
        {restaurant.name}
      </h1>
      <div className={classNames(styles.linkWrapper)}>
        <NavLink to="reviews">
          {({ isActive }) => (
            <button className={classNames(styles.button)} disabled={isActive}>
              Reviews
            </button>
          )}
        </NavLink>
        <NavLink to="menu">
          {({ isActive }) => (
            <button className={classNames(styles.button)} disabled={isActive}>
              Menu
            </button>
          )}
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Restaurant;
