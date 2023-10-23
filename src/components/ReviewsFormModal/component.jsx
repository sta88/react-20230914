import { ReviewsForm } from '../ReviewsForm/component';

import styles from './styles.module.scss'

export const ReviewsFormModal = ({ onSubmit }) => {
  return (
    <div className={styles.modal}>
        <ReviewsForm className={styles.form} onSubmit={onSubmit}/>
    </div>
  );
};
