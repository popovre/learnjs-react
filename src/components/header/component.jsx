import Login from '../login/component';
import styles from './style.module.scss';
import classNames from 'classnames';
import { CartButtonContainer } from '../cart-button/container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classNames(styles.root)}>
      <div className={classNames(styles.userPanel)}>
        <Link to="/" className={classNames(styles.link)}>
          Home
        </Link>
        <CartButtonContainer />
        <Login className={classNames(styles.login)} />
      </div>
    </header>
  );
};

export default Header;
