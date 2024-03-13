import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import classNames from 'classnames';

const HomePage = () => {
  return (
    <div className={classNames(styles.root)}>
      <h2 className={classNames(styles.title)}>
        Добро пожаловать, в агрегатор ресторанов!
      </h2>
      <Link to="/restaurants" className={classNames(styles.restaurantsLink)}>
        Выбор ресторанов
      </Link>
    </div>
  );
};

export default HomePage;
