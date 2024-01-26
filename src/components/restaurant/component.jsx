import classNames from 'classnames';
import styles from './style.module.scss';
import Menu from '../menu/component';
import Reviews from '../reviews/component';

const Restaurant = ({ restaurant }) => {
  return (
    <div className={classNames(styles.wrapper)}>
      <h1 className={classNames(styles.h1, styles.restaurantName)}>
        {restaurant.name}
      </h1>
      <h3 className={classNames(styles.h3)}>Menu</h3>
      <Menu menu={restaurant.menu} />
      <h3 className={classNames(styles.h3, styles.reviewTitle)}>Reviews</h3>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};

export default Restaurant;