import { useSelector } from 'react-redux';
import Cart from './component';
import { selectCartProductIds } from '../../redux/ui/cart';

const CartContainer = () => {
  const productIds = useSelector(selectCartProductIds);
  return <Cart productIds={productIds} />;
};

export default CartContainer;
