import Menu from './component';
import {
  useGetDishesQuery,
  useGetRestaurantsQuery,
} from '../../redux/services/api';
import { useParams } from 'react-router-dom';

const MenuContainer = () => {
  const { restaurantId } = useParams();

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find((restaurant) => restaurant.id === restaurantId),
    }),
  });

  const { data: dishes, isLoading } = useGetDishesQuery(restaurantId, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.filter((dish) => restaurant.menu.includes(dish.id)),
    }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes} />;
};

export default MenuContainer;
