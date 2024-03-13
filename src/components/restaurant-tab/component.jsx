import Button from '../button/component';
import classNames from 'classnames';
import styles from './style.module.scss';

const RestaurantTab = ({ name, disabled }) => {
  return (
    <Button
      className={classNames(styles.button)}
      disabled={disabled}
      onClick={() => {}}
    >
      {name}
    </Button>
  );
};

export default RestaurantTab;
