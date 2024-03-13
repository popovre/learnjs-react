import RestaurantTabs from './component';
import { useGetRestaurantsQuery } from '../../redux/services/api';

const TabsContainer = (props) => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <RestaurantTabs {...props} restaurants={restaurants} />;
};

export default TabsContainer;
