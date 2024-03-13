import Restaurant from './component';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import { useParams } from 'react-router-dom';

const RestaurantContainer = () => {
  const { restaurantId } = useParams();
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find((restaurant) => restaurant.id === restaurantId),
    }),
  });

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};

export default RestaurantContainer;
