import { useReducer } from 'react';
import { user as USER_DEFAULT } from '../../constants/structures.js';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.js';
import classNames from 'classnames';
import styles from './style.module.scss';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'setName':
      return {
        ...state,
        name: payload,
      };
    case 'setMail':
      return {
        ...state,
        mail: payload,
      };
    default:
      return {
        ...USER_DEFAULT,
      };
  }
};

const LoginForm = ({ onClose }) => {
  const { setUser } = useContext(UserContext);

  const loginUser = (userData) => {
    setUser({
      name: userData.name,
      id: 'a304959a-76c0-4b34-954a-b38dbf310360',
    });
  };

  const [form, dispatch] = useReducer(reducer, USER_DEFAULT);

  return (
    <div className={classNames(styles.root)}>
      <button
        className={classNames(styles.closeButton, styles.button)}
        onClick={onClose}
      >
        Close
      </button>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          className={classNames(styles.input)}
          id="name"
          type="text"
          value={form.name}
          onChange={(e) =>
            dispatch({ type: 'setName', payload: e.target.value })
          }
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="mail">Mail</label>
        <input
          className={classNames(styles.input)}
          id="mail"
          type="text"
          value={form.mail}
          onChange={(e) =>
            dispatch({ type: 'setMail', payload: e.target.value })
          }
        />
      </div>

      <button
        className={classNames(styles.loginButton, styles.button)}
        onClick={() => {
          loginUser(form);
        }}
      >
        Log in
      </button>
    </div>
  );
};

export default LoginForm;
