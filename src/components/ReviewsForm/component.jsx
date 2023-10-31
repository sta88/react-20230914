import classNames from 'classnames';
import { useReducer } from 'react';
import { Button } from '../Button/component';

import styles from './styles.module.scss'

export const ReviewsForm = ({ className, onSubmit, onReset, formValue, onChange }) => {

  return (
    <div className={classNames(styles.form, className)}>
      <h4>Enter your review</h4>
      <div className={styles.formRow}>
          <input
              className={styles.input}
              type="text"
              placeholder="Name"
              value={formValue.name}
              onChange={(e) => onChange('setName', e.target.value)}
          />
      </div>
      <div className={styles.formRow}>
          <textarea
              className={styles.textarea}
              placeholder="..."
              value={formValue.review}
              onChange={(e) => onChange('setReview', e.target.value)}
          ></textarea>
      </div>
      <div className={styles.formRow}>
          <input
              className={styles.input}
              type="number"
              min="0"
              max="5"
              placeholder="0-5"
              value={formValue.rating}
              onChange={(e) => onChange('setRating', e.target.value)}
          />
      </div>
      <Button
        onClick={onReset}
        variant={'cancel'}>
        Cancel
      </Button>
      <Button
        onClick={onSubmit}
        className={styles.button}>
        Save
      </Button>
    </div>
  );
};