import Counter from '../counter/component';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useGetDishQuery } from '../../redux/services/api';
import { Link } from 'react-router-dom';

const Dish = ({ dishId }) => {
  const { data: dish } = useGetDishQuery(dishId);

  const minValue = 0;
  const maxValue = 5;
  return (
    <div className={classNames(styles.dish)}>
      <Link to={`/dish/${dishId}`}>Dish: {dish?.name}</Link>
      <div>Price: {dish?.price}</div>
      <div>Ingredients: {dish?.ingredients.join(', ')} </div>
      <div>
        <Counter dishId={dishId} minValue={minValue} maxValue={maxValue} />
      </div>
    </div>
  );
};

export default Dish;
