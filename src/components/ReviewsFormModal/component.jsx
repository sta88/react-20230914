import { ReviewsFormContainer } from '../ReviewsForm/container';

import styles from './styles.module.scss'

export const ReviewsFormModal = ({ onClose, restaurantId }) => {
  return (
    <div className={styles.modal}>
        <ReviewsFormContainer className={styles.form} onClose={onClose} restaurantId={restaurantId}/>
    </div>
  );
};
