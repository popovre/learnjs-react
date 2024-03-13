import { useParams } from 'react-router-dom';
import { useGetDishQuery } from '../../redux/services/api';

const DishPage = () => {
  const { dishId } = useParams();
  const { data: dish, isLoading } = useGetDishQuery(dishId);

  if (isLoading) {
    return <div>Loading Dish...</div>;
  }

  return (
    <div>
      <h1>Dish: {dish?.name}</h1>
      <h2>Price: {dish?.price}</h2>
      <h3>Ingredients: {dish?.ingredients.join(', ')}</h3>
    </div>
  );
};

export default DishPage;
