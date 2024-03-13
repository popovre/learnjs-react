import Dish from '../dish/component';
import classNames from 'classnames';
import styles from './style.module.scss';

const Cart = ({ productIds }) => {
  return (
    <div className={classNames(styles.root)}>
      <h3 className={classNames(styles.title)}>Корзина</h3>
      {productIds?.length ? (
        productIds.map((id) => <Dish key={id} dishId={id} />)
      ) : (
        <span>Empty</span>
      )}
    </div>
  );
};

export default Cart;
