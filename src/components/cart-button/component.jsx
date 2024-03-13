import { useState } from 'react';
import { createPortal } from 'react-dom';
import CartContainer from '../cart/container';

import styles from './styles.module.scss';
import { useRef } from 'react';
import Button from '../button/component';
import classNames from 'classnames';

export const CartButton = ({ amount }) => {
  const [coordinates, setCoordinates] = useState(null);
  const buttonRef = useRef();

  const toggleCartModal = () => {
    if (coordinates) {
      setCoordinates(null);
      return;
    }

    const { bottom, left } = buttonRef.current.getBoundingClientRect();

    setCoordinates({ left: '1rem', top: 'calc(150px + 1.5rem)' });
  };

  return (
    <>
      <Button
        className={classNames(styles.button)}
        ref={buttonRef}
        onClick={toggleCartModal}
      >
        Dishes: {amount}
      </Button>
      {coordinates &&
        createPortal(
          <div style={coordinates} className={styles.modal}>
            <CartContainer />
          </div>,
          document.getElementById('popoverContainer')
        )}
    </>
  );
};
