import Header from '../header/component';
import Footer from '../footer/component';
import styles from './style.module.scss';
import classNames from 'classnames';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={classNames(styles.root)}>
      <Header />
      <main className={classNames(styles.main)}>
        <Outlet />
      </main>
      <Footer />
      <div id="modal-container"></div>
      <div id="popoverContainer" className={styles.popoverContainer} />
    </div>
  );
};

export default Layout;
