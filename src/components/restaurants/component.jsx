import Restaurant from '../restaurant/component';
import Tabs from '../tabs/component';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useState } from 'react';

const Restaurants = ({ restaurants }) => {
  const [visibleRestaurant, setVisibleRestaurant] = useState(restaurants[0].id);

  const onTabButtonClick = (id) => {
    setVisibleRestaurant(id);
  };

  return (
    <div>
      <Tabs onClick={onTabButtonClick} restaurants={restaurants}></Tabs>
      <div className={classNames(styles.restaurants)}>
        {restaurants.map((restaurant) => {
          if (restaurant.id == visibleRestaurant) {
            return <Restaurant restaurant={restaurant} key={restaurant.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default Restaurants;
