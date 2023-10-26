import classNames from 'classnames';
import { useReducer } from 'react';
import { Button } from '../Button/component';

import styles from './styles.module.scss'

// const DEFAULT_VALUE = {
//   name: '',
//   review: '',
//   rating: 0
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'setName':
//       return {...state, name: action.payload};
//     case 'setReview':
//       return {...state, review: action.payload};
//     case 'setRating':
//       return {...state, rating: action.payload};
//     case 'reset':
//       return {...DEFAULT_VALUE};
//     default:
//       return state;
//   }
// };

export const ReviewsForm = ({ className, onSubmit, onReset, formValue, onChange }) => {
  // const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  // const resetForm = () => {
  //   dispatch({type: 'reset'});
  //   onSubmit();
  // }

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