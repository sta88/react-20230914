import { ReviewsForm } from '../ReviewsForm/component';

import styles from './styles.module.scss'

export const Modal = ({ onClose }) => {
  return (
    <div class={styles.modal}>
        <ReviewsForm className={styles.form} onClose={onClose}/>
    </div>
  );
};
