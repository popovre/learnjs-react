import styles from './style.module.scss';
import classNames from 'classnames';
import Button from '../button/component';
import { useReviewForm } from './use-review-form';

const ReviewForm = ({ initialState, onSave, user }) => {
  const { form, setRating, setText } = useReviewForm(initialState);
  return (
    <div className={styles.root}>
      <h3>Write your review</h3>
      <div className={styles.field}>
        <label htmlFor="name">Name: {user.name}</label>
      </div>
      <div className={styles.field}>
        <label htmlFor="text">Text</label>
        <input
          className={classNames(styles.input)}
          id="text"
          type="text"
          value={form.text}
          onChange={setText}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="rating">Rating</label>
        <input
          className={classNames(styles.input)}
          id="rating"
          type="number"
          min="0"
          max="5"
          value={form.rating}
          onChange={setRating}
        />
      </div>
      <Button
        className={classNames(styles.button)}
        onClick={() => onSave(form)}
      >
        Сохранить
      </Button>
    </div>
  );
};

export default ReviewForm;
